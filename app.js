let btn9=document.querySelector(".btn9");
let btn8=document.querySelector(".btn8");
let btn7=document.querySelector(".btn7");
let btn6=document.querySelector(".btn6");
let btn5=document.querySelector(".btn5");
let btn4=document.querySelector(".btn4");
let btn3=document.querySelector(".btn3");
let btn2=document.querySelector(".btn2");
let btn1=document.querySelector(".btn1");
let btn0=document.querySelector(".btn0");
let btn10=document.querySelector(".btn10");
let btn11=document.querySelector(".btn11");
let btn12=document.querySelector(".btn12");
let btn13=document.querySelector(".btn13");
let btn14=document.querySelector(".btn14");
let btn15=document.querySelector(".btn15");

let expression=" ";

let screen=document.querySelector(".solution");

btn9.addEventListener("click",()=>{
     expression += "9";
    screen.innerText = expression;
   
})

btn8.addEventListener("click",()=>{
   expression += "8";
    screen.innerText = expression;
})
btn7.addEventListener("click",()=>{
   expression += "7";
    screen.innerText = expression;
})

btn6.addEventListener("click",()=>{
  expression += "6";
    screen.innerText = expression;
})


btn5.addEventListener("click",()=>{
  expression += "5";
    screen.innerText = expression;
})
btn4.addEventListener("click",()=>{
  expression += "4";
    screen.innerText = expression;
})
btn3.addEventListener("click",()=>{
   expression += "3";
    screen.innerText = expression;
})
btn2.addEventListener("click",()=>{
   expression += "2";
    screen.innerText = expression;
})

btn1.addEventListener("click",()=>{
  expression += "1";
    screen.innerText = expression;
})
btn0.addEventListener("click",()=>{
   expression += "0";
    screen.innerText = expression;
})

btn10.addEventListener("click",()=>{
   expression += "/";
    screen.innerText = expression;
})
btn11.addEventListener("click",()=>{
   expression += "*";
    screen.innerText = expression;
})
btn12.addEventListener("click",()=>{
   expression += "+";
    screen.innerText = expression;
})
btn13.addEventListener("click",()=>{
    expression = expression.slice(0, -1);
    screen.innerText = expression;
})
btn14.addEventListener("click",()=>{

    expression = eval(expression);
    screen.innerText = expression;
});

btn15.addEventListener("click",()=>{
   expression += "-";
    screen.innerText = expression;
})

