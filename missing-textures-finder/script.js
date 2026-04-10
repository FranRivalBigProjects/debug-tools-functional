const res=document.getElementById("res");

function run(){
 let list=assets.value.split("\n").filter(x=>x);
 let missing=list.filter(n=>n.includes("missing"));
 res.innerText=missing.length>0?missing.join("\n"):"No missing textures detected";
}

