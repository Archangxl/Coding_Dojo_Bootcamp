from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = "secret_key"

@app.route('/')
def display():
    if 'times' in session:
        session['times'] +=1
    else:
        session['times'] = 1
    return render_template('index.html')

@app.route('/delete')
def removeCookies():
    session.pop('times')
    return redirect('/')

@app.route('/add-2')
def addTwo():
    session['times'] +=1
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)