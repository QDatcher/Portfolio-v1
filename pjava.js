//defining some variables in about

let button2 = document.getElementById('two');
let button1 = document.getElementById('one');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p1.hidden = true;
p2.hidden = true;
button2.hidden = true;

button1.onclick = function(){
    p1.hidden = false;
    p2.hidden = false;
    button2.hidden = false;
    button1.hidden = true;
}

button2.onclick = function(){
    p1.hidden = true;
    p2.hidden = true;
    button1.hidden = false;
    button2.hidden = true;
}


//defining variables in the project section

let trg1 = document.getElementById('trigger1');
let trg2 = document.getElementById('trigger2');
let trg3 = document.getElementById('trigger3');
let ident1 = document.getElementById('ident1');
let ident2 = document.getElementById('ident2');
let ident3 = document.getElementById('ident3');
let prj1 = document.getElementById('prj1');
let prj2 = document.getElementById('prj2');
let prj3 = document.getElementById('prj3');

prj1.hidden = 'true';
prj2.hidden = 'true';
prj3.hidden = 'true';


trg2.onclick = function(){
    prj2.hidden = false;
    ident2.hidden = true;
}


trg1.onclick = function(){
    prj1.hidden = false;
    ident1.hidden = true;
}



trg3.onclick = function(){
    prj3.hidden = false;
    ident3.hidden = true;
}

