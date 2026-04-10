const res=document.getElementById("res");

function run(){
 let s=+samples.value,l=+lights.value;
 if(!s||!l){res.innerText="Enter values";return;}
 let score=s+(l*50);
 res.innerText=score>1000?"Render likely slow":"Render OK";
}

