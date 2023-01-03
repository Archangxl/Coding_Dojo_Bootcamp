from flask import render_template,redirect,request
from flask_app import app
from flask_app.models.user import User


@app.route('/')
def index():
    users = User.get_all()
    return render_template("index.html", all_users=users)

@app.route("/new")
def form():
    return render_template("form.html")

@app.route("/new/user", methods=["POST"])
def post():
    if not User.validateNewUser(request.form):
        return redirect('/new')
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form['email']
    }

    User.save(data)

    return redirect ('/')

@app.route("/show/<int:id>")
def show(id):
    data ={
        "id": id
    }

    return render_template ('show.html', user  = User.show(data))

@app.route("/show/<int:id>/edit")
def showEdit(id):
    data = {
        "id": id
    }
    return render_template('edit.html', user = User.show(data))

@app.route('/update',methods=['POST'])
def updateThis():
    User.updateMe(request.form)
    return redirect('/')

@app.route('/delete/<int:id>')
def deleteThis(id):
    data = {
        "id": id
    }
    User.delete(data)
    return redirect('/')