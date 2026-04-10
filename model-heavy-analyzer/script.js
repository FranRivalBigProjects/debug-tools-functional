const res=document.getElementById("res");

function run(){
 let p=+poly.value,t=+textures.value;
 if(!p||!t){res.innerText="Enter values";return;}
 let score=p+(t*100000);
 res.innerText=score>1000000?"Model too heavy":"Model optimized";
}

