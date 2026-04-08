from flask import Flask, request, jsonify
from deta import Deta
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

deta = Deta(os.getenv("DETA_PROJECT_KEY"))
db = deta.Base("cso_db")

@app.route("/save", methods=["POST"])
def save():
    data = request.json
    for d in data["distributors"]:
        db.put({
            "cso_id": data["cso_id"],
            "cso_name": data["cso_name"],
            "rev": data["rev"],
            "cooler": data["cooler"],
            "outlet": data["outlet"],
            "dbr_id": d["id"],
            "dbr_name": d["name"],
            "cont": d["cont"],
            "ase_id": data["ase_id"]
        })
    return jsonify({"status":"saved"})

@app.route("/data", methods=["GET"])
def data():
    ase = request.args.get("ase_id")
    res = db.fetch().items
    if ase != "admin":
        res = [x for x in res if x.get("ase_id")==ase]
    return jsonify(res)

@app.route("/delete/<key>", methods=["DELETE"])
def delete(key):
    db.delete(key)
    return jsonify({"status":"deleted"})
