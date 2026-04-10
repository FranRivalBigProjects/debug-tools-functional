const res=document.getElementById("res");

function run(){
 let e=+errors.value;
 if(e===0){res.innerText="Mesh OK";return;}
 if(!e){res.innerText="Enter value";return;}
 res.innerText=e>10?"Severely broken mesh":"Minor mesh issues";
}

