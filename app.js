const input=document.querySelector("#input");
const output=document.querySelector("#output");
const increase=document.querySelector("#increase");
const decrease=document.querySelector("#decrease");


increase.addEventListener("click",increment);

function increment()

{
    let value=repeatStyles();
    let newValue=(value+2)+"px";
    input.style.fontSize=newValue;
}

decrease.addEventListener("click",decrement);
function decrement(){
    let value=repeatStyles();
    let newValue=(value-2)+"px";
    input.style.fontSize=newValue;
}

function repeatStyles(){
    let compStyles=window.getComputedStyle(input);
    let currentSize=compStyles.getPropertyValue("font-size");
    let currentValue=currentSize.slice(0,-2);
    let intCurrentValue=Number(currentValue);
    return intCurrentValue;
}

