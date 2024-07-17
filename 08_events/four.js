function createRandom() {
    const num = Math.round(Math.random()*255 + 1)
    return num
}

const changeBackColor = function() {
    const red = createRandom()
    const green = createRandom()
    const blue = createRandom()
    console.log(red, green, blue)
    const body = document.querySelector('body')
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

let intervalId;

const btnStart = document.querySelector('#start').addEventListener('click', ()=> {
    console.log(intervalId, 'hi');
    if(!intervalId){
        intervalId = setInterval(changeBackColor, 1000) 
        console.log(intervalId);
    }
})


const btnStop = document.querySelector('#stop').addEventListener('click', ()=> {
    clearInterval(intervalId);
    //intervalId = null;
})