
class Game {
constructor (){

// PROPIEDADES Y ELEMENTOS DEL JUEGO
// CREAREMOS UNA CLASE GAME QUE LO VA A ENGLOBAR TODO, DESDE PROPIEDADES HASTA METODOS
this.avionObj = new Avion()
//this.enemyObj = new Enemy()

// EN EL CASO DEL ENEMIGO Y DE LOS OBSTÁCULOS, NO CREAREMOS EL OBJETO IGUAL QUE EL AVIÓN =>
// => EN SU LUGAR, CREAREMOS UN ARRAY PARA PODER EXTRAER LA INFO CUANDO TENGAMOS VARIOS.

 this.enemyArr = []

 // PARA CONTROLAR LA ENTRADA DE OBJETOS EN EL ARRAY, VAMOS A CREAR UN CONTADOR DE FRAMES
 this.frames = 0

 // PARA QUE EL JUEGO SE DETENGA CREAMOS ESTA VARIABLE Y LE DAMOS UN VALOR BOOLEANO
 this.isGameOn= true

}
// MÉTODOS O ACCIONES DEL JUEGO

// AÑADIR ENEMIGO
addEnemy = () => {

if(this.frames % 180 === 0 ){
    let randomNum = Math.random() * 400
    let randomXint = Math.floor(randomNum)

    let nuevoEnemy = new Enemy(randomXint)
this.enemyArr.push(nuevoEnemy)

console.log(this.enemyArr)
}

}
avionEnemyColission = () => {
    this.enemyArr.forEach((eachEnemy) => {
        if(
            this.avionObj.x <eachEnemy.x +eachEnemy.w &&
            this.avionObj.x + this.avionObj.w >eachEnemy.x &&
            this.avionObj.y <eachEnemy.y +eachEnemy.h &&
            this.avionObj.h + this.avionObj.y >eachEnemy.y
        ) {
            this.gameOver()
            console.log( "colission")
        }
    })

}
gameOver = () => {
    // CAMBIAMOS LA CONDICIÓN QUE MANTIENE EL JUEGO EN MARCHA
    this.isGameOn = false
    // OCULTAMOS EL CANVAS, Y MOSTRAMOS EL SCREEN DE GAME OVER
    canvas.style.display = "none"
    // ACTIVAMOS LA PANTALLA GAME OVER
    gameOverScreen.style.display = "flex"


}



// FUNCIÓN DE RECURSIÓN

gameLoop = () => {
    // ACTIVACIÓN DE LA VARIABLE FRAMES
    this.frames = this.frames +1

// 1. LIMPIAR EL CANVAS

ctx.clearRect( 0, 0, canvas.width, canvas.height )

// 2. DIBUJADO DE LOS ELEMENTOS

this.avionObj.drawAvion()

this.enemyArr.forEach((eachEnemy)  => {
    eachEnemy.drawEnemy()
 
 })
 
//this.enemyObj.drawEnemy()

// 3. ACCIONES O METODOS DE LOS ELEMENTOS
this.avionEnemyColission()
this.addEnemy()

this.enemyArr.forEach((eachEnemy) => {
    eachEnemy.moveEnemy()
})






if( this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop)  
}
  
}

}
