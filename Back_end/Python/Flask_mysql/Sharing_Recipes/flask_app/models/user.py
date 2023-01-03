from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import app
import re
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:

    database = "sharing_recipes"

    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validateUser(user):
        is_valid = True

        if len(user['fname']) < 1:
            flash("First Name must be at least 2 characters.", "register")
            is_valid = False
        elif len(user['fname']) <= 0:
            flash("First Name must be filled out", "register")
        if len(user['lname']) < 1:
            flash("Last Name must be at least 2 characters", "register")
            is_valid = False
        elif len(user['lname']) <= 0:
            flash("Last Name must be filled out", "register")
            is_valid = False
        if len(user['reg_email']) <= 0:
            flash("Email must be filled out", "register")
            is_valid = False
        elif not EMAIL_REGEX.match(user['reg_email']):
            flash("Invalid email address!", "register")
            is_valid = False
        elif User.getUserByEmail(user['reg_email']) == True:
            flash("Email already exists", "register")
            is_valid = False
        if len(user['reg_password']) <= 7:
            flash("Pasword needs to be 8 characters long", "register")
            is_valid = False
        elif (user['reg_password'] != user['confirm_password']):
            flash("Passwords do not match", "register")
            is_valid = False
        return is_valid 

    @classmethod
    def addUser(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES ( %(fname)s, %(lname)s, %(reg_email)s, %(password)s, NOW(), NOW());"
        return connectToMySQL(cls.database).query_db(query, data)

    @classmethod
    def getUserByID(cls, id):
        data = {"id":id}
        query = "SELECT * from users WHERE id = %(id)s;"
        result = connectToMySQL(cls.database).query_db(query, data)

        if len(result) == 0:
            print(1)
            return False
        else:
            print(2)
            return result[0]

    @classmethod
    def getUserByEmail(cls, email):
        data = {'email': email}
        query = "SELECT * from users WHERE email = %(email)s;"
        result = connectToMySQL(cls.database).query_db(query, data)

        if len(result) == 0:
            return False
        else:
            return result[0]

    @staticmethod 
    def validateLogin(user):

        is_valid = True

        maybe_email = User.getUserByEmail(user['login_email'])

        if not EMAIL_REGEX.match(user['login_email']):
            flash("Invalid Email/Password", "login")
            is_valid = False
        elif maybe_email is False:
                flash("Wrong Email/Password", "login")
                is_valid = False
        else:
            if not bcrypt.check_password_hash(maybe_email['password'], user['password']):
                flash("Invalid Email/Password", "login")
                is_valid = False
        if is_valid:
            return maybe_email
        else:
            return is_valid