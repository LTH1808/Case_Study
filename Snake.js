let grip_size = 25
let rows = 20
let cols = 20
let canvas
let ctx


let snakeX = grip_size * 5
let snakeY = grip_size * 5

let vectorX = 0
let vectorY = 0

let snakeBody = []

let foodX
let foodY


let gameover = false

window.onload = function () {
    canvas = document.getElementById("canvas")
    canvas.width = rows * grip_size
    canvas.height = cols * grip_size
    ctx = canvas.getContext('2d')
    getRandonNumber()
    document.addEventListener('keydown', control)
    setInterval(update, 100)
}


function update() {
    
    if(gameover){
        return
    }

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "lime"
    ctx.fillRect(foodX, foodY, grip_size, grip_size)

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        getRandonNumber()
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1]
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    ctx.fillStyle = " red "
    snakeX += vectorX * grip_size
    snakeY += vectorY * grip_size
    ctx.fillRect(snakeX, snakeY, grip_size, grip_size)
    ctx.fillStyle = "white"
    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], grip_size, grip_size)
    }

    if(snakeX < 0){
        snakeX = canvas.width - grip_size
    }

    if( snakeX >  canvas.width - grip_size){
        snakeX = 0 
    }

    if(snakeY < 0){
        snakeY = canvas.width - grip_size
    }

    if( snakeY > canvas.width - grip_size){
        snakeY = 0 
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameover = true
            alert("Game Over")
        }
    }

   

}


function control(evt) {
    switch (evt.keyCode) {
        case 37:
            if( vectorX == 1) break
            vectorX = -1;
            vectorY = 0;
            break;
        case 38:
            if( vectorY == 1) break
            vectorX = 0;
            vectorY = -1;
            break;
        case 39:
            if( vectorX == -1) break
            vectorX = 1;
            vectorY = 0;
            break;
        case 40:
            if( vectorY == -1) break
            vectorX = 0;
            vectorY = 1;
            break;
    }

}


function getRandonNumber() {

    foodX = Math.floor(Math.random() * cols) * grip_size
    foodY = Math.floor(Math.random() * rows) * grip_size

}

