

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
   this.speed = 20

   // 
    }

// METODOS O ACCIONES DEL AVION
drawAvion = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

}