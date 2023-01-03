from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/')
def home():
    dojos = Dojo.getAllDojos()

    return render_template('dojos.html', dojos = dojos)

@app.route('/create/dojo', methods=["POST"])
def createDojo():
    data = {
        "dname": request.form["dname"]
    }

    Dojo.saveDojo(data)

    return redirect('/')

@app.route('/dojohall/<int:id>')
def dojohall(id):
    data = {
        "id":id
    }

    return render_template('dojohall.html', dojo = Dojo.showDojo(data))

@app.route('/newninja')
def newNinjaPage():

    dojos = Dojo.getAllDojos()

    return render_template('ninja.html', dojos = dojos)

@app.route('/addninja', methods=['POST'])
def addNinja():

    data = {
        'nfname': request.form['nfname'],
        'nlname': request.form['nlname'],
        'nage': request.form['nage'],
        'dojos_id': request.form['dname']
    }
    print(data)

    Ninja.saveNinja(data)

    return redirect('/')

@app.route('/dojohall/<int:dojoid>/delete/<int:ninjaid>')
def deleteNinja(dojoid, ninjaid):
    data = {
        "id": ninjaid,
    }

    Ninja.deleteNinja(data)

    return redirect(f"/dojohall/{dojoid}")

@app.route('/dojohall/<int:dojoid>/editninja/<int:ninjaid>')
def showEdit(ninjaid, dojoid):
    data = {
        "id": ninjaid
    }

    return render_template('editninja.html', ninja = Ninja.showNinja(data), dojoid = dojoid)

@app.route('/dojohall/<int:dojoid>/editninja/<int:ninjaid>/commencechange', methods=['POST'])
def commenceNinjaChange(ninjaid, dojoid):
    data = {
        'id': ninjaid,
        'nfname': request.form['nfname'],
        'nlname': request.form['nlname'],
        'nage': request.form['nage'],
    }

    Ninja.updateNinja(data)

    return redirect(f"/dojohall/{dojoid}")

