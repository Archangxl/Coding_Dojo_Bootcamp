from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.post import Post
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/new', methods=['POST'])
def newUser():
    if not User.validateNewUser(request.form):
        return redirect('/')
    data = {
        "fname": request.form['fname'],
        "lname": request.form['lname'],
        "reg_email": request.form['reg_email'],
        "password": bcrypt.generate_password_hash(request.form['confirm_password'])
    }

    email = request.form['reg_email']
    session['email'] = email

    User.new_user(data)

    return redirect('/')

@app.route('/login', methods=['POST'])
def login():

    user_logging_in = User.validateLogin(request.form)

    if not user_logging_in:
        return redirect('/')

    session['id'] = user_logging_in['id']

    print("here")

    return redirect("/dashboard")

@app.route('/dashboard')
def dashboard():
    if 'id' not in session:
        return redirect('/')

    return render_template('user.html', posts = Post.gatherPosts(), user = User.getUserByID(session['id']) )

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/post/create', methods=['POST'])
def createPost():

    if 'id' not in session:
        return redirect('/')

    data = {
        "content": request.form['post'],
        "id": session['id']
    }
    Post.savePost(data)

    return redirect('/dashboard')
    
@app.route('/delete/post', methods=['post'])
def deleteMe():

    data = {
        'id': request.form['post_id']
    }
    Post.deletePost(data)

    return redirect('/dashboard')