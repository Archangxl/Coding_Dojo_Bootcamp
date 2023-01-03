from flask import Flask, render_template, session, redirect, request
import random
app=Flask(__name__)
app.secret_key = "secret key"


@app.route('/')
def index():
    if 'randomNum' not in session:
        session['randomNum'] = random.randint(1,100)
    if 'attempts' not in session:
        session['attempts'] = 0
    return render_template('index.html')

@app.route('/random', methods=['POST'])
def decide():
    session['guess'] = int(request.form['guess'])
    session['randomNum'] = random.randint(1,100)
    session['attempts'] +=1
    return redirect ('/')

@app.route('/clear')
def clear(): 
    session.clear()
    return redirect('/')

@app.route('/leaderboards')
def leaderboards():
    return render_template('lead.html')


if __name__ == "__main__":
    app.run(debug=True)