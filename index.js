const incButton=document.querySelector("#inc");
const decButton=document.querySelector("#dec");
const clrButton=document.querySelector("#clr");
const textBox=document.querySelector("#count");
const error=document.querySelector("p");
var count=0;
error.style.display="none";

incButton.addEventListener("click",()=>{
    count++;
    console.log(count);
    clrButton.style.display="inline";
    error.style.display="none";
    textBox.textContent=`Your current count is:${count}`;
});
decButton.addEventListener("click",()=>{
    if(count>0){
        count--;
        console.log(count);
        textBox.textContent=`Your current count is:${count}`;
    }else{
        textBox.textContent=" ";
        error.style.display="block";
        console.log(count);
    }
});
clrButton.addEventListener("click",()=>{
    count=0;
    console.log(count);
    textBox.textContent=`Your current count is:${count}`;
    clrButton.style.display="none";
})
