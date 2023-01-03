from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_app.models import user

class Post:

    database = 'users_login_and_registration'

    def __init__(self, data):
        self.id = data['id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.author = None

    @classmethod
    def gatherPosts(cls):
        query = "SELECT * FROM posts LEFT JOIN users on posts.user_id = users.id ORDER BY posts.created_at DESC;"
        results = connectToMySQL(cls.database).query_db(query)

        all_posts = []

        for row in results:

            post = cls(row)

            data = {
                "id": row['users.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "email": row['email'],
                "password": row['password'],
                "created_at": row['users.created_at'],
                "updated_at": row['users.updated_at']
            }

            author = user.User(data)

            post.author = author

            all_posts.append(post)

        return all_posts

    @classmethod
    def savePost(cls,data):
        query = "INSERT INTO posts (content, created_at, updated_at, user_id) VALUES ( %(content)s, NOW(), NOW(), %(id)s );"
        return connectToMySQL(cls.database).query_db(query, data)

    @classmethod
    def deletePost(cls,data):
        query = "DELETE FROM posts WHERE id = %(id)s"
        return connectToMySQL(cls.database).query_db(query, data)