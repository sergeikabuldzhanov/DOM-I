const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;
time = 0
const colorS = document.querySelector('.digits');
function timeTick(){
    let arrTime = time.toString().split('');
    if(time<10){
        msTens.textContent = time;
    }else if(time<100){
        msTens.textContent = arrTime[1];
        msHundreds.textContent = arrTime[0];
    }else if(time<1000){
        msTens.textContent = arrTime[2];
        msHundreds.textContent = arrTime[1];
        secondOnes.textContent = arrTime[0];
        console.log('I work!');
    }else if(time<10000){
        msTens.textContent = 0;
        msHundreds.textContent = 0;
        secondOnes.textContent = 0;
        secondTens.textContent = 1;
        colorS.style.color = 'red';
        btn.disabled = false;
    }
    time+=1;
}

const btn = document.querySelector('button');

function t(){
    myInt = setInterval(timeTick, 10);
    btn.disabled = true;
}

function cl(){
    clearInterval(myInt);
    time=0;
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    btn.disabled = false;
    colorS.style.color = 'black';
}
btn.addEventListener("click", t);

const reset = document.querySelector('.reset');

reset.addEventListener("click", cl);