/* Temas */
function themeToggle(){
    let toggle=document.getElementById('toggle').value;
    let body=document.body;
    if(toggle==='1'){
        body.classList='theme1';
    }else if(toggle==='2'){
        body.classList='theme2';
    }
    else if(toggle==='3'){
        body.classList='theme3';
    }
}
let screen=document.getElementById('txtscreen');
let used=false;

/* Screen */
function presskey(val){

    let lastChar = screen.value[screen.value.length - 1];
    
    if (val === '.') {
        decimalValidation(val, lastChar);
        return;
    } else if (val === '+' || val === '-' || val === '*' || val === '/' ) {
        used = false;
        keyValidation(val, lastChar);
    } else {
        screen.value+=val;
    }
}
function calc(){
    let resul = eval(screen.value);
    screen.value = resul;
}
/* clear */
function clearScreen(){
    screen.value='';
}
function clearDigit(){
    screen.value = screen.value.substring(0,screen.value.length - 1);
}


/* Validation key */
function keyValidation(val, lastChar){
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || screen.textLength === 0){
      return;
    } else {
      screen.value += val;
    }
};

function decimalValidation (val, lastChar){
    if (used === false && lastChar !== '.') {
      screen.value += val;
      used = true;
    } else {
        console.log(used)
      return;
    }
};