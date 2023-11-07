const input=document.getElementById("ip");
const tt=document.querySelector(".txt");
function addit(){
    if(input.value=="")
        alert("No text entered");
    else{ 
        let x=document.createElement("ul");
        x.innerHTML=`${input.value} `;
        tt.appendChild(x);
        let y=document.createElement("y");
        y.innerHTML=`&#10006`;
        x.appendChild(y);
        input.value="";
        saveData();
    }
}
tt.addEventListener("click",function(e){
if(e.target.tagName=="Y"){
    e.target.parentElement.remove();
    saveData();
}
},false);
function saveData(){
    localStorage.setItem("data",tt.innerHTML);
}
tt.innerHTML=localStorage.getItem("data");