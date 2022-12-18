let listnum = []
let num = 0;
var res = document.getElementById("display");
function addNumber(n){
    listnum.push(n);
    res.innerText = `${listnum}`;
    alert(listnum);
}


function addOperation(op){
    let num1 = listnum;
    listnum = [];
    return op;
}

function calculate(){

    switch(op){
        case '+':
            return res = num1 + num;
        case '-':
            return num1 - num;
        case '*':
            return num1 * num;
        case '/':
            return num1 / num;
    }
}