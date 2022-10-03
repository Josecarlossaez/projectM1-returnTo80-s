class Bang {
    constructor(bangX, bangY) {
        this.img = new Image()
        this.img.src = "./images.bang.png"
        this.x = bangX
        this.y = bangY
        this.w = 25
        this.h = 25
    }

    // DIBUJADO DE BANG
    drawBang = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h)
    }
}