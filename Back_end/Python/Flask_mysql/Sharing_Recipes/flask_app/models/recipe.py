from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
from flask import flash
from flask import app

class Recipe:
    database = "sharing_recipes"

    def __init__(self,data):
        self.id = data['id']
        self.recipe_name = data['recipe_name']
        self.description = data['description']
        self.under_30_minutes = data['under_30_minutes']
        self.instruction = data['instruction']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.author = None

    @classmethod
    def gatherRecipes(cls):
        query = "SELECT * FROM recipes LEFT JOIN users on recipes.user_id = users.id ORDER BY recipes.created_at ASC;"
        results = connectToMySQL(cls.database).query_db(query)

        all_recipes = []

        for row in results:

            recipe = cls(row)

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

            recipe.author = author

            all_recipes.append(recipe)

        return all_recipes

    @classmethod
    def saveRecipe(cls, data):
        query = "INSERT INTO recipes (recipe_name, description, under_30_minutes, instruction, created_at, updated_at, user_id) VALUES ( %(recipe_name)s, %(description)s, %(under_30_minutes)s, %(instruction)s, %(created_at)s, NOW(), %(user_id)s )"
        return connectToMySQL(cls.database).query_db(query, data)


    @classmethod
    def deleteRecipe(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        return connectToMySQL(cls.database).query_db(query, data)

    @classmethod
    def selectRecipe(cls,data):
        query = "SELECT * from recipes LEFT JOIN users on recipes.user_id = users.id WHERE recipes.id = %(id)s"
        results =  connectToMySQL(cls.database).query_db(query, data)

        recipes = []

        for row in results:

            recipe = cls(row)

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

            recipe.author = author

            recipes.append(recipe)

        return recipes[0]
    @staticmethod
    def validateRecipe(recipe):
        is_valid = True

        if len(recipe['recipe_name']) == 0:
            flash("Recipe Name cannot be blank", "addNewRecipe")
            is_valid = False
        elif len(recipe['recipe_name']) <= 2:
            flash("Recipe Name must be at least 3 characters", "addNewRecipe")
            is_valid = False
        if len(recipe['description']) == 0:
            flash("Description cannot be blank", "addNewRecipe")
            is_valid = False
        elif len(recipe['description']) <= 2:
            flash("Description must be at least 3 characters", "addNewRecipe")
            is_valid = False
        if len(recipe['instruction']) == 0:
            flash("Instructions cannot be blank", "addNewRecipe")
            is_valid = False
        elif len(recipe['instruction']) <= 2:
            flash("Instructions must be at least 3 characters", "addNewRecipe")
            is_valid = False

        return is_valid
        