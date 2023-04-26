from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__ (self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod 
    def saveNinja(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojos_id) VALUES( %(nfname)s, %(nlname)s, %(nage)s, NOW(), NOW(), %(dojos_id)s );"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def showNinja(cls, data):
        query = 'SELECT * FROM ninjas WHERE id = %(id)s;'
        result = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        return result[0]

    @classmethod 
    def updateNinja(cls, data):
        query = "UPDATE ninjas SET first_name = %(nfname)s, last_name = %(nlname)s, age = %(nage)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def deleteNinja(cls, data):
        query = "DELETE FROM dojos_and_ninjas.ninjas WHERE id = %(id)s;"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)