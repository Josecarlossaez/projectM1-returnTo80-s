// GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const startScreen = document.querySelector("#splash-screen")
const gameOverScreen = document.querySelector("#gameover-screen")
canvas.style.display="none"
gameOverScreen.style.display = "none"
// CREAMOS LA VARIABLE PARA CREAR EL OBJETO PERTENECIENTE A LA CLASE GAME
   // NO LA INICIALIZAMOS, LA INICIAMOS DENTRO DE LA FUNCIÓN, ASÍ LA PODREMOS
   // UTILIZAR DESDE TODAS LAS PARTES QUE QUERAMOS.
let gameObj;      

// BUTTONS
const startBtn = document.querySelector("#button-start")
const tryAgainBtn = document.querySelector("#tryAgain")


// STATE MANAGEMENT FUNCTIONS

const startGame =() => {
    //activamos la pantalla de juego
    //ocultamos la pantalla de inicio
    startScreen.style.display = "none"
    // mostramos la pantalla de juego
    canvas.style.display = "block"
    gameOverScreen.style.display= "none"

    // INICIALIZAMOS LA VARIABLE gameObj,
    // así ya podemos acceder a las funciones pertenecientes a Game.
    gameObj = new Game()

    // ACTIVAR LA FUNCIÓN DE RECURSIÓN PARA QUE SIGA FUNCIONANDO SIN PARAR
gameObj.gameLoop()

};


// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if(event.code === "KeyW"){
    gameObj.avionObj.y = gameObj.avionObj.y - gameObj.avionObj.speed;
     }
     if (event.code === "KeyS"){
        gameObj.avionObj.y = gameObj.avionObj.y + gameObj.avionObj.speed;  
     }
     if (event.code === "KeyA"){
        gameObj.avionObj.x = gameObj.avionObj.x - gameObj.avionObj.speed;
     }
     if ( event.code === "KeyD"){
        gameObj.avionObj.x = gameObj.avionObj.x + gameObj.avionObj.speed;
     }

})