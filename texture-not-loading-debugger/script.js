const res=document.getElementById("res");

function run(){
 let p=+paths.value;
 if(p===0){res.innerText="No issues detected";return;}
 if(!p){res.innerText="Enter value";return;}
 res.innerText=p>5?"Multiple missing textures":"Few missing textures";
}

