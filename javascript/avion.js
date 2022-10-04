

// CREAMOS LA CLASE DEL ELEMENTO
class Avion {
    constructor(){
    // PROPIEDADES DEL AVION
    // creamos la imagen
    this.img = new Image();
    this.img.src ="./images/avion.png"
    this.x = 230
    this.y = 700
    this.w = 50
    this.h = 50
    // VELOCIDAD DE MOVIMIENTO
   this.speed = 3

   // CREACIÓN DE VARIABLES PARA REALIZAR MOVIMIENTO CONTÍNUO
   this.moveUp = false;
   this.moveDown= false;
   this.moveLeft = false;
   this.moveRight= false;
    }

// METODOS O ACCIONES DEL AVION
drawAvion = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}
// MOVIMIENTO DEL AVIÓN
 goUp = () => {
    if(this.moveUp === true && this.y > 0){
        this.y = this.y - this.speed
    }
 }

 goDown = () => {
    if(this.moveDown === true && this.y < canvas.height - 55) {
        this.y = this.y + this.speed
    }
 }
goLeft = () => {
    if (this.moveLeft === true && this.x >5) {
        this.x = this.x - this.speed;
    }
}

goRight = () => {
    if(this.moveRight === true && this.x < canvas.width -55 ){
        this.x = this.x + this.speed
    }
}


}