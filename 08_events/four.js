let intervalId;


const btnStart = document.querySelector('#start').addEventListener('click', ()=> {
    const red = Math.round(Math.random() * 255 + 1)
    const green = Math.round(Math.random() * 255 + 1)
    const blue = Math.round(Math.random() * 255 + 1)
    console.log(red, green, blue)
    const body = document.querySelector('body')
    intervalId = setInterval(body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`, 1000)  
})

intervalId = setInterval(btnStart, 1000)

const btnStop = document.querySelector('#stop').addEventListener('click', ()=> {
    clearInterval(intervalId)
})