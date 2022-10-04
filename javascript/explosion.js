class Explosion {
    constructor(explosionX, explosionY){
        this.img = new Image()
        this.img.src = "./images/explosion.png"

        this.x = explosionX
        this.y = explosionY
        this.w = 80
        this.h = 80
    }
    drawExplosion = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}