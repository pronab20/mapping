import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

if(localStorage.getItem("role") !== "admin"){
    window.location = "index.html";
}

let editId = null;

loadData();

window.saveAdmin = async function(){

    let data = {
        cso_id: document.getElementById("cso_id").value,
        rev: document.getElementById("rev").value,
        ase_id: document.getElementById("ase").value
    };

    if(editId){
        await updateDoc(doc(db, "cso_data", editId), data);
        editId = null;
    } else {
        await addDoc(collection(db, "cso_data"), data);
    }

    loadData();
};

async function loadData(){

    let table = document.getElementById("table");

    table.innerHTML = `
    <tr>
        <th>CSO</th>
        <th>Revenue</th>
        <th>ASE</th>
        <th>Action</th>
    </tr>`;

    let snapshot = await getDocs(collection(db, "cso_data"));

    snapshot.forEach(docSnap => {

        let d = docSnap.data();

        let row = table.insertRow();

        row.innerHTML = `
            <td>${d.cso_id}</td>
            <td>${d.rev}</td>
            <td>${d.ase_id}</td>
            <td>
                <button onclick="editRow('${docSnap.id}','${d.cso_id}','${d.rev}','${d.ase_id}')">Edit</button>
                <button onclick="deleteRow('${docSnap.id}')">Delete</button>
            </td>
        `;
    });
}

window.editRow = function(id,cso,rev,ase){
    document.getElementById("cso_id").value = cso;
    document.getElementById("rev").value = rev;
    document.getElementById("ase").value = ase;
    editId = id;
};

window.deleteRow = async function(id){
    await deleteDoc(doc(db, "cso_data", id));
    loadData();
};

window.logout = function(){
    localStorage.clear();
    window.location = "index.html";
};
