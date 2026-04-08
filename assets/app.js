
import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.addRow = function(){
    let t = document.getElementById("dist_table");
    let r = t.insertRow();
    r.innerHTML = `
        <td><input class="dbr_id"></td>
        <td><input class="dbr_name"></td>
        <td><input class="cont"></td>
    `;
};

window.saveData = async function(){
    let distributors = [];
    document.querySelectorAll("#dist_table tr").forEach((row,i)=>{
        if(i===0) return;
        distributors.push({
            id: row.querySelector(".dbr_id").value,
            name: row.querySelector(".dbr_name").value,
            cont: row.querySelector(".cont").value
        });
    });

    await addDoc(collection(db, "cso_data"), {
        cso_id: document.getElementById("cso_id").value,
        rev: document.getElementById("rev").value,
        cooler: document.getElementById("cooler").value,
        outlet: document.getElementById("outlet").value,
        ase_id: localStorage.getItem("user"),
        distributors
    });

    alert("Saved Successfully");
};

await addDoc(collection(db, "cso_data"), {
    cso_id: document.getElementById("cso_id").value,
    rev: document.getElementById("rev").value,
    cooler: document.getElementById("cooler").value,
    outlet: document.getElementById("outlet").value,
    ase_id: localStorage.getItem("user"),
    distributors
});
