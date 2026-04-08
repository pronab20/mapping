import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// PROTECT ADMIN
if(localStorage.getItem("role") !== "admin"){
    alert("Access Denied");
    window.location = "index.html";
}

// AUTO LOAD
loadData();

// CREATE / UPDATE
window.saveAdmin = async function(){

    await addDoc(collection(db, "cso_data"), {
        cso_id: document.getElementById("cso_id").value,
        rev: document.getElementById("rev").value,
        ase_id: document.getElementById("ase").value
    });

    alert("Saved");
    loadData();
};

// READ
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
                <button onclick="deleteRow('${docSnap.id}')">Delete</button>
                <button onclick="editRow('${docSnap.id}','${d.cso_id}','${d.rev}','${d.ase_id}')">Edit</button>
            </td>
        `;
    });
}

// DELETE
window.deleteRow = async function(id){
    await deleteDoc(doc(db, "cso_data", id));
    loadData();
};

// EDIT
window.editRow = function(id,cso,rev,ase){
    document.getElementById("cso_id").value = cso;
    document.getElementById("rev").value = rev;
    document.getElementById("ase").value = ase;

    window.editId = id;
};

// UPDATE
window.saveAdmin = async function(){

    if(window.editId){
        await updateDoc(doc(db, "cso_data", window.editId), {
            cso_id: document.getElementById("cso_id").value,
            rev: document.getElementById("rev").value,
            ase_id: document.getElementById("ase").value
        });
        window.editId = null;
    } else {
        await addDoc(collection(db, "cso_data"), {
            cso_id: document.getElementById("cso_id").value,
            rev: document.getElementById("rev").value,
            ase_id: document.getElementById("ase").value
        });
    }

    loadData();
};
