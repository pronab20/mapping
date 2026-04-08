const API="https://YOUR_DETA_URL.deta.dev";

function addRow(){
 let t=document.getElementById("dist_table");
 let r=t.insertRow();
 r.innerHTML='<td><input class="dbr_id"></td><td><input class="dbr_name"></td><td><input class="cont"></td>';
}

function saveData(){
 let distributors=[];
 document.querySelectorAll("#dist_table tr").forEach((row,i)=>{
  if(i===0)return;
  distributors.push({
   id:row.querySelector(".dbr_id").value,
   name:row.querySelector(".dbr_name").value,
   cont:row.querySelector(".cont").value
  });
 });

 fetch(API+"/save",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
   cso_id:document.getElementById("cso_id").value,
   cso_name:"",
   rev:document.getElementById("rev").value,
   ase_id:localStorage.getItem("user"),
   distributors
  })
 }).then(()=>alert("Saved"));
}
