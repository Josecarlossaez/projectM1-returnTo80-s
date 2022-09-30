
class Game {
constructor (){

// PROPIEDADES Y ELEMENTOS DEL JUEGO
// CREAREMOS UNA CLASE GAME QUE LO VA A ENGLOBAR TODO, DESDE PROPIEDADES HASTA METODOS
this.avionObj = new Avion()

}
// MÉTODOS O ACCIONES DEL JUEGO
// FUNCIÓN DE RECURSIÓN

gameLoop = () => {

// 1. LIMPIAR EL CANVAS

ctx.clearRect( 0, 0, canvas.width, canvas.height )

// 2. DIBUJADO DE LOS ELEMENTOS

this.avionObj.drawAvion()



requestAnimationFrame(this.gameLoop)    
}

}
