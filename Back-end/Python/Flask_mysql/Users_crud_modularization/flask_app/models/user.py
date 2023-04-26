from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class User:
    def _init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('usercr').query_db(query)
        users = []

        for user in results:
            users.append(user)
        return users
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES ( %(fname)s, %(lname)s, %(email)s, NOW(), NOW());"
        return connectToMySQL('usercr').query_db(query, data)

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL('usercr').query_db(query, data)
        return result[0]

    @classmethod
    def updateMe(cls,data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('usercr').query_db(query,data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL('usercr').query_db(query, data)

    @staticmethod
    def validateNewUser(user):
        is_valid = True

        if len(user['fname']) < 2:
            flash("First Name must be at least 2 characters.")
            is_valid = False
        elif len(user['fname']) <= 0:
            flash("First Name must be filled out")
        if len(user['lname']) < 2:
            flash("Last Name must be at least 2 characters")
            is_valid = False
        elif len(user['lname']) <= 0:
            flash("Last Name must be filled out")
            is_valid = False
        if len(user['email']) <=0:
            flash("Email must be filled out")
            is_valid = False
        elif not EMAIL_REGEX.match(user['email']):
            flash("Invalid email address!")
            is_valid = False
        return is_valid