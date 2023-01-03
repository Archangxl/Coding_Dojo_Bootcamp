from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', numOfRows=8, numOfBlocks=8, color1="red", color2="black")

@app.route('/<int:numOfRows>')
def indexTwo(numOfRows):
    return render_template('index.html', numOfRows=numOfRows, numOfBlocks=8, color1="red", color2="black")

@app.route('/<int:numOfRows>/<int:numOfBlocks>')
def indexThree(numOfRows, numOfBlocks):
    return render_template('index.html', numOfRows=numOfRows, numOfBlocks=numOfBlocks, color1="red", color2="black")

@app.route('/<int:numOfRows>/<int:numOfBlocks>/<string:color1>/<string:color2>')
def indexFour(numOfRows, numOfBlocks, color1, color2):
    return render_template('index.html', numOfRows=numOfRows, numOfBlocks=numOfBlocks, color1=color1, color2=color2)

if __name__ == '__main__':
    app.run(debug = True)