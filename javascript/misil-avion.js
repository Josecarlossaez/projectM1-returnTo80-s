class MisilAvion {
    constructor(positionX, positionY){
    this.img = new Image()
    this.img.src = "./images/misil-avion.png"

    this.x = positionX
    this.y = positionY
    this.w = 10
    this.h = 30

    this.speed = 4

}
// DIBUJADO DE MISIL
drawMisilAvion = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

// MOVIMIENTO DEL MISIL
moveMisilAvion = () => {
    this.y = this.y - this.speed
}
}