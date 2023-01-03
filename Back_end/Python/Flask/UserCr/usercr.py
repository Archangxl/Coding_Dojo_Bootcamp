from mysqlconnection import connectToMySQL

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