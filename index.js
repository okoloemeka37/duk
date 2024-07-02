
let button=document.querySelector("button");


button.addEventListener("click",()=>{
    
    document.querySelector(".rest").innerText='';

    let cont=document.querySelector("#cont").value;
    
    let st=cont.indexOf("{");

    let cl=cont.substring(0,st)

    let tp=cont.indexOf("}");

    let main=cont.substring((st+1),tp)
    
    //console.log(st +" "+ tp)
    //console.log(cl);
   
let tr=  main.trim();

 let gh=tr.split(/\n/).join("");

   // console.log(gh);
    let rt=gh.split(" ").join("");

    let nm=rt.split(";");

   // console.log(nm);

 let num=(nm.findIndex(nm => /display/i.test(nm)));

 nm[num]="display:block"


document.querySelector(".rest").innerText =cl+"{ \n";
nm.forEach(kl => {
let bm=kl.trim() +"; \n";

document.querySelector(".rest").innerText+=bm;

});

document.querySelector(".rest").innerText +=" }";




})