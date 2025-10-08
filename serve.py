from waitress import serve
from python_app import app

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=10000)
