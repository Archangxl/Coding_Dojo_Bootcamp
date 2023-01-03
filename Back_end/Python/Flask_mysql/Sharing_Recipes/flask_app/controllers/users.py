from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models import user
from flask_app.models import recipe
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def loginPage():
    return render_template("login.html")

@app.route('/new', methods=['POST'])
def newUser():
    if not user.User.validateUser(request.form):
        return redirect('/')
    data = {
        "fname": request.form['fname'],
        "lname": request.form['lname'],
        "reg_email": request.form['reg_email'],
        "password": bcrypt.generate_password_hash(request.form['confirm_password'])
    }

    email = request.form['reg_email']
    session['email'] = email

    user.User.addUser(data)

    id = user.User.getUserByEmail(email)
    session['id'] = id['id']

    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():

    user_logging_in = user.User.validateLogin(request.form)

    if not user_logging_in:
        return redirect('/')

    session['id'] = user_logging_in['id']

    print("here")

    return redirect("/dashboard")

@app.route('/dashboard')
def dashboard():
    if 'id' not in session:
        return redirect('/')

    return render_template('dashboard.html', recipebook = recipe.Recipe.gatherRecipes(), user = user.User.getUserByID(session['id']) )

@app.route('/view/recipe/<int:id>')
def viewRecipe(id):
    if 'id' not in session:
        return redirect('/')
    data = {"id": id}
    return render_template ('view_recipe.html', recipes = recipe.Recipe.selectRecipe(data), user = user.User.getUserByID(session['id']))

@app.route('/edit/recipe/<int:id>')
def editRecipe(id):
    if 'id' not in session:
        return redirect('/')
    data = {'id': id}
    session['recipe_id'] = id
    return render_template('edit_recipe.html', recipes = recipe.Recipe.selectRecipe(data))

@app.route('/edit/recipe', methods=['POST'])
def completeEditRecipe():
    if 'id' not in session:
        return redirect('/')
    if not recipe.Recipe.validateRecipe(request.form):
        return redirect(f"/edit/recipe/{session['recipe_id']}")
    
    session.pop('recipe_id')

    return redirect('/dashboard')

@app.route('/back/dashboard')
def backDashboard():
    return redirect('/dashboard')

@app.route('/add/recipe')
def viewAddRecipe():
    if 'id' not in session:
        return redirect('/')

    return render_template('addrecipe.html')

@app.route('/new/recipe', methods=['POST'])
def addingNewRecipe():

    if not recipe.Recipe.validateRecipe(request.form):
        return redirect('/add/recipe')

    data = {
        'recipe_name': request.form['recipe_name'],
        'description': request.form['description'],
        'instruction': request.form['instruction'],
        'created_at': request.form['created_at'],
        'under_30_minutes': request.form['under_30_minutes'],
        'user_id': session['id']
    }

    print(data)
    recipe.Recipe.saveRecipe(data)
    
    return redirect('/dashboard')

@app.route('/delete/<int:id>')
def deleteRecipe(id):
    data={"id": id}
    recipe.Recipe.deleteRecipe(data)
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')


