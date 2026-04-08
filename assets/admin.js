import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔐 PROTECT ADMIN
if(localStorage.getItem("role") !== "admin"){
    alert("Access Denied ❌");
    window.location = "index.html";
}

let editId = null;

// 🚀 AUTO LOAD
loadData();

// ✅ SAVE / UPDATE
window.saveAdmin = async function(){

    let data = {
        cso_id: document.getElementById("cso_id").value,
        rev: document.getElementById("rev").value,
        ase_id: document.getElementById("ase").value
    };

    if(editId){
        // 🔄 UPDATE
        await updateDoc(doc(db, "cso_data", editId), data);
        editId = null;
    } else {
        // ➕ CREATE
        await addDoc(collection(db, "cso_data"), data);
    }

    alert("Saved Successfully ✅");
    loadData();
};

// 📊 LOAD DATA
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

// ✏️ EDIT
window.editRow = function(id,cso,rev,ase){
    document.getElementById("cso_id").value = cso;
    document.getElementById("rev").value = rev;
    document.getElementById("ase").value = ase;
    editId = id;
};

// ❌ DELETE
window.deleteRow = async function(id){
    if(confirm("Are you sure to delete?")){
        await deleteDoc(doc(db, "cso_data", id));
        loadData();
    }
};

// 🚪 LOGOUT
window.logout = function(){
    localStorage.clear();
    window.location = "index.html";
};
