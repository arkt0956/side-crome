from flask import Flask,render_template,jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb+srv://test:test@cluster0.lrizo6r.mongodb.net/?retryWrites=true&w=majority')

db = client.momentum

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/who/<name>', methods=["GET"])
def login(name):
    existed_name = list(db.users.find({'name':str(name)},{'_id':False}))
    if existed_name == None:
        return jsonify({'data':''})
    else:
        return jsonify({'data':existed_name})

if __name__ == '__main__':
    app.run('0.0.0.0',port=10000,debug=True)
