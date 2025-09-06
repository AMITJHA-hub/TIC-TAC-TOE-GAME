let winnername=document.querySelector(".winner");
let start=document.querySelector(".stbutton");
let reset=document.querySelector(".retbutton");
let box=document.querySelectorAll(".box")
let inputx=document.querySelector("#x")
let xenterbutton=document.querySelector(".xbutton");
let inputy=document.querySelector("#y")
let yenterbutton=document.querySelector(".ybutton");
let nameOfX=document.querySelector(".naamx");
let nameOfY=document.querySelector(".naamy");
let xenter=document.querySelector(".afterxValue");
let yenter=document.querySelector(".afteryValue");


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
for (let boxs of box) {
        boxs.disabled = true; 
    }
let turn0=true;
const disableBoxes = () => {
    for (let boxs of box) {
        boxs.disabled = true; 
    }
    nameOfX.classList.add("hide");
    nameOfY.classList.add("hide");
};
xenterbutton.addEventListener("click",()=>{
    if(inputx.value!=""&&inputy.value!=""){
        let xname=inputx.value;
        xenter.classList.add("hide");
        nameOfX.innerText='X is chosen by '+xname;
        nameOfX.classList.add("st");
        for (let boxs of box) {
        boxs.disabled = false; 
    }
}
    else {
    winnername.classList.remove("hide");
    winnername.innerText=`Pleace Enter participants name`;
}
})
yenterbutton.addEventListener("click",()=>{
    if(inputx.value!=""&&inputy.value!=""){
        let yname=inputy.value;
        yenter.classList.add("hide");
        nameOfY.innerText='Y ischosen by: '+yname;
        nameOfY.classList.add("st");
        for (let boxs of box) {
        boxs.disabled = false;
    }
    }
    else {
    winnername.classList.remove("hide");
    winnername.innerText=`Pleace Enter participants name`;
}
})
start.addEventListener("click",()=>{
    if(inputx.value==""||inputy.value==""){
        winnername.classList.remove("FINISH");
        winnername.classList.remove("hide");
        winnername.innerText=`Pleace Enter participants name`;
    }
    else{
        turn0=true;
        winnername.classList.add("hide");
        winnername.classList.remove("FINISH");
        for (let boxs of box) {
        boxs.innerText="";
        boxs.disabled = false; 
    }
    xenter.classList.remove("hide");
    yenter.classList.remove("hide");
    nameOfX.innerText="";
    nameOfX.classList.remove("st");
    nameOfY.innerText="";
    nameOfY.classList.remove("st");
    winnername.classList.remove("hide");
    winnername.classList.remove("FINISH");
    winnername.innerText=` START NEW MATCH !!!!`
}
})
reset.addEventListener("click",()=>{
    turn0=true;
    winnername.classList.add("hide");
    winnername.classList.remove("FINISH");
    for (let boxs of box) {
        boxs.innerText="";
        boxs.disabled = false; 
    }
})

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 && box.innerText===""){
            box.innerText='O';
            turn0=false;
        }
        else if(!turn0 && box.innerText===""){
            box.innerText='X';
            turn0=true
        }
        checkwinner();
    })
})
const checkwinner= ()=>{
    for(let patt of winpattern){
        let pos1=box[patt[0]].innerText;
        let pos2=box[patt[1]].innerText;
        let pos3=box[patt[2]].innerText;
        if(pos1!="" &&pos2!="" &&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                winnername.classList.remove("hide");
                if(pos1=="X"){
                    console.log(pos1);
                    winnername.innerText=` CONGRATULATIONS!!!! \n ${inputx.value}\n YOU ARE THE WINNER`
                }
                else{
                    winnername.innerText=`CONGRATULATIONS!!!!\n${inputy.value}\n YOU ARE THE WINNER`
                }
                winnername.classList.add("FINISH");
                disableBoxes();
            }
        }
    }

}
