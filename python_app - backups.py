from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

# store current sign values
signs = {i: "" for i in range(1, 10)}

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("update_sign")
def update_sign(data):
    sign_id = data["id"]
    value = data["value"]
    signs[sign_id] = value
    emit("sign_updated", data, broadcast=True)
