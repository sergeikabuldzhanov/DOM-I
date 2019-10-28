const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;
time = 0
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
        const colorS = document.querySelector('.digits');
        colorS.style.color = 'red';
    }
    time+=1;
}

function t(){
    setInterval(timeTick, 10);
}

const btn = document.querySelector('button');
btn.addEventListener("click", t);
