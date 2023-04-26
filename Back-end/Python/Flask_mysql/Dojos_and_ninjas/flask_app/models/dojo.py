from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninja

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod 
    def getAllDojos(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        dojos = []

        for dojo in results: 
            dojos.append(dojo)
        return dojos

    @classmethod 
    def saveDojo(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES( %(dname)s, NOW(), NOW() );"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def showDojo(cls, data):
        query = 'SELECT * FROM dojos JOIN ninjas on dojos.id = ninjas.dojos_id WHERE dojos.id = %(id)s;'
        result = connectToMySQL('dojos_and_ninjas').query_db(query, data)

        dojo = cls(result[0])
        for tablerow in result:
            ninja = {
                'id': tablerow['ninjas.id'],
                'first_name': tablerow['first_name'],
                'last_name': tablerow['last_name'],
                'age': tablerow['age'],
                'created_at': tablerow['ninjas.created_at'],
                'updated_at': tablerow['ninjas.updated_at'],
                'dojos_id': tablerow['dojos_id']
            }

            dojo.ninjas.append( Ninja(ninja))
            
        return dojo

    @classmethod 
    def updateDojo(cls, data):
        query = "UPDATE dojos SET name = %(name)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def deleteDojo(cls, data):
        query = "DELETE FROM dojos WHERE id = $(id)s;"
        return connectToMySQL('dojos_and_ninjas').query_db(query, data)

    
