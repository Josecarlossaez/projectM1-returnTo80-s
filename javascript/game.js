
class Game {
constructor (){

// PROPIEDADES Y ELEMENTOS DEL JUEGO
// CREAREMOS UNA CLASE GAME QUE LO VA A ENGLOBAR TODO, DESDE PROPIEDADES HASTA METODOS
this.avionObj = new Avion()
//this.enemyObj = new Enemy()

// EN EL CASO DEL ENEMIGO Y DE LOS OBSTÁCULOS, NO CREAREMOS EL OBJETO IGUAL QUE EL AVIÓN =>
// => EN SU LUGAR, CREAREMOS UN ARRAY PARA PODER EXTRAER LA INFO CUANDO TENGAMOS VARIOS.

 this.enemyArr = []
 this.asteroideArr = []
 this.misilAvionArr = []

 // PARA CONTROLAR LA ENTRADA DE OBJETOS EN EL ARRAY, VAMOS A CREAR UN CONTADOR DE FRAMES
 this.frames = 0

 // PARA QUE EL JUEGO SE DETENGA CREAMOS ESTA VARIABLE Y LE DAMOS UN VALOR BOOLEANO
 this.isGameOn= true

 // CREACIÓN DE VARIABLES PARA POSICIONAMIENTO DE INICIO DE DISPARO DEL AVIÓN. CENTRAR MISIL EN AVION
 
}
// MÉTODOS O ACCIONES DEL JUEGO

// AÑADIR ENEMIGO
addEnemy = () => {

if(this.frames % 180 === 0 ){
    let randomNum = Math.random() * 400
    let randomXint = Math.floor(randomNum)

    let nuevoEnemy = new Enemy(randomXint)
this.enemyArr.push(nuevoEnemy)

//console.log(this.enemyArr)
}

}
addAsteroide = () => {
    if( this.frames % 540 === 0){
        let randomNum2 = Math.random() * 400
        let randomXint2 = Math.floor(randomNum2)

let nuevoAsteroide = new Asteriode(randomXint2)
this.asteroideArr.push(nuevoAsteroide)
console.log(this.asteroideArr)
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

avionAsteroideColission = () => {
    this.asteroideArr.forEach((eachAsteroide) => {
        if(
        this.avionObj.x <eachAsteroide.x +eachAsteroide.w &&
        this.avionObj.x + this.avionObj.w >eachAsteroide.x &&
        this.avionObj.y <eachAsteroide.y +eachAsteroide.h &&
        this.avionObj.h + this.avionObj.y >eachAsteroide.y  
        ) {
            this.gameOver()
        }
    })
}
addDisparoAvion = () => {
    let positionX = this.avionObj.x + 20
   let positionY = this.avionObj.y -30

    let nuevoMisil = new MisilAvion(positionX, positionY)
    this.misilAvionArr.push(nuevoMisil)
    console.log("disparando misil")
    console.log(this.misilAvionArr)

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
// dibujando avión
this.avionObj.drawAvion()

// dibujando enemy
this.enemyArr.forEach((eachEnemy)  => {
    eachEnemy.drawEnemy()
 
 }) // dibujando asteroide
 this.asteroideArr.forEach((eachAsteroide) => {
    eachAsteroide.drawAsteroide()
 })
   // dibujando misil avión
 this.misilAvionArr.forEach((eachMisil) => {
    eachMisil.drawMisilAvion()
 })
 


// 3. ACCIONES O METODOS DE LOS ELEMENTOS
this.avionEnemyColission()
this.avionAsteroideColission()
this.addEnemy()
this.addAsteroide()

// MOVIMIENTO DEL ENEMY
this.enemyArr.forEach((eachEnemy) => {
    eachEnemy.moveEnemy()
})

// MOVIMIENTO DEL ASTEROIDE
this.asteroideArr.forEach((eachAsteroide) => {
    eachAsteroide.moveAsteroide()
})
// MOVIMIENTO DEL MISIL DEL AVION
    this.misilAvionArr.forEach((eachMisil) => {
        eachMisil.moveMisilAvion()
    })






if( this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop)  
}
  
}

}
