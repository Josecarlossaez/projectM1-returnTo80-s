class Asteriode{
constructor(randomXint2){
    this.img = new Image()
    this.img.src = "./images/asteroide.png"
this.x =randomXint2
this.y = -90
this.w = 90
this.h = 90
this.speed = 0.5


}
// METODOS PARA ASTEROIDE

// DIBUJADO DE ASTEROIDE

drawAsteroide = () => {
ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

// MOVIMIENTOS DEL ASTEROIDE
moveAsteroide = () => {
    this.y = this.y + this.speed
}

}