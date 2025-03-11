

let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let zero=document.querySelector("#zero");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let divide=document.querySelector("#divide");
let multiply=document.querySelector("#multiply");
let ac=document.querySelector("#ac");
let eq=document.querySelector("#equal")
let res=document.querySelector("#result") 



let input = document.querySelector("#input");



let operand=0;

let operand1=0;

let operator="";

let result=0;



function clickk (eve){



    input.textContent +=`${eve}`

    
       
}


function cal(o,o1){

    if(operator==="+"){

    result=o+o1;
}
else if(operator==="-"){

    result=o1-o;
}

else if(operator==="*"){

    result=o1*o;
}

else if(operator==="/"){

    result=o1/o;
}

}


function getoperator(op){


    switch (op) {
        case "+":
             input.textContent +=`${"+"}`
            
           
            console.log("+")
            break;
            case "-":
                input.textContent +=`${"-"}`
                result=operand-operand1
                break;
                case "/":
                    input.textContent +=`${"/"}`
                    result=operand/operand1
                    break;
                    case "*":
                        input.textContent +=`${"*"}`
                        result=operand*operand1
                        break;
                        case "=":
                            res.textContent=`${result}`
                            console.log("done")
                          
                            
                            break;                  
    
    }

}




one.onclick = function(){


    if(operand===0){
        operand=1
    }
else{
operand1=operand
operand=1
}

console.log(operand)
console.log(operand1)
clickk(operand)

cal(operand,operand1)
 
    
}

two.onclick = function(){
  

    if(operand===0){
        operand=2
    }
else{
operand1=operand
operand=2
}

console.log(operand)
console.log(operand1)
clickk(operand)
cal(operand,operand1)

   
    
}

three.onclick = function(){

    
    if(operand===0){
        operand=3
    }
else{
operand1=operand
operand=3
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)


   
    
}
four.onclick = function(){

    if(operand===0){
        operand=4
    }
else{
operand1=operand
operand=4
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
five.onclick = function(){
   
    if(operand===0){
        operand=5
    }
else{
operand1=operand
operand=5
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
six.onclick = function(){
  
    if(operand===0){
        operand=6
    }
else{
operand1=operand
operand=6
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
    
}
seven.onclick = function(){
   
    if(operand===0){
        operand=7
    }
else{
operand1=operand
operand=7
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
eight.onclick = function(){
   

    if(operand===0){
        operand=8
    }
else{
operand1=operand
operand=8
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
nine.onclick = function(){
  
    if(operand===0){
        operand=9
    }
else{
operand1=operand
operand=9
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
zero.onclick = function(){
   

    if(operand===0){
        operand=0
    }
else{
operand1=operand
operand=0
}

console.log(operand)
console.log(operand1)

clickk(operand)
cal(operand,operand1)
   
    
}
dot.onclick = function(){

    dot="."
   

    clickk();
   
}

plus.onclick = function() {

    operator="+"
    getoperator(operator)


   
};


minus.onclick = function() {

    operator="-"
    getoperator(operator)
   
};

divide.onclick = function() {


    operator="/"
    getoperator(operator)
   
};

multiply.onclick = function() {

  
    operator="*"
    getoperator(operator)
   
};

equal.onclick = function() {

    operator="="
    getoperator(operator)
   
};



ac.onclick=function(){

    input.textContent=""
    res.textContent=""

   

}


