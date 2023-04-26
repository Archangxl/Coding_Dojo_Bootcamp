from flask import Flask, render_template, request, redirect, session
app=Flask(__name__)
app.secret_key="secret_key"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/formSubmit', methods=['POST'])
def formSubmit():
    session['name'] = request.form['name']
    session['dojo-location'] = request.form['location']
    session['favorite-language'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/result')

@app.route('/result')
def showForm():
    return render_template('form.html', name=session['name'], location=session['dojo-location'], language=session['favorite-language'], comment=session['comment'])

if __name__ == "__main__":
    app.run(debug=True)