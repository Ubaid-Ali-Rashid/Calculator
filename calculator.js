let f_number = '';
let s_number = '';
let operand;

function coming_value(n){
    if(operand === '+' || operand === '-' || operand === '*' || operand === '/'){
        s_number = s_number+n;
        document.getElementById('screen').innerText = s_number;
    }
    else{
        f_number = f_number+n;
        document.getElementById('screen').innerText = f_number;
    }
}


function clear_all(){
    document.getElementById('screen').innerText = "";
    operand = '';
    f_number = '';
    s_number = '';
}


function operator(n){
    operand = n;
    document.getElementById('screen').innerText = "";
}


function answer(){
    if(operand === '+'){
        document.getElementById('screen').innerText = parseInt(f_number)+parseInt(s_number);
    }
    else if(operand === '-'){
        document.getElementById('screen').innerText = parseInt(f_number)-parseInt(s_number);
    }
    else if(operand === '*'){
        document.getElementById('screen').innerText = parseInt(f_number)*parseInt(s_number);
    }
    else if(operand === '/'){
        document.getElementById('screen').innerText = parseInt(f_number)/parseInt(s_number);
    }
    f_number = '';
    s_number = '';
}