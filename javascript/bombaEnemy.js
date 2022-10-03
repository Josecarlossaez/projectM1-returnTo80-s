class BombaEnemy {
    constructor(bombaPositionX, bombaPositionY){
        this.img = new Image()
        this.img.src = "./images/bomba-enemigo.png"

        this.x = bombaPositionX
        this.y = bombaPositionY
        this.w = 20
        this.h = 30
        this.speed = 3
    }
// DIBUJADO DE LA BOMBA
drawBombaEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h )
}

moveBombaEnemy = () => {
this.y = this.y + this.speed;
}

}