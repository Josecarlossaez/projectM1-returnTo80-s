
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
 this.bangArr =[]
 this.bombaEnemyArr = []

 // PARA CONTROLAR LA ENTRADA DE OBJETOS EN EL ARRAY, VAMOS A CREAR UN CONTADOR DE FRAMES
 this.frames = 0

 // PARA QUE EL JUEGO SE DETENGA CREAMOS ESTA VARIABLE Y LE DAMOS UN VALOR BOOLEANO
 this.isGameOn= true

 // CREACIÓN DE VARIABLES PARA POSICIONAMIENTO DE BOMBA CON RESPECTO A SU NAVE

 // CREACIÓN DE VARIABLES PARA POSICIONAMIENTO BANG CON RESPECTO A LA COLISIÓN
 let bangX;
 let bangY;
 // SCORE
 this.score = 0
}
// MÉTODOS O ACCIONES DEL JUEGO

// AÑADIR ENEMIGO
addEnemy = () => {

if(this.frames % 180 === 0 ){
    let randomXint = Math.random() * 400
    

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
//console.log(this.asteroideArr)
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
            //console.log( "colission")
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
addMisilAvion = () => {
    let positionX = this.avionObj.x + 20
   let positionY = this.avionObj.y -30

    let nuevoMisil = new MisilAvion(positionX, positionY)
    this.misilAvionArr.push(nuevoMisil)
    // console.log("disparando misil")
    // console.log(this.misilAvionArr)
   
}
addBombaEnemy = () => {
    this.enemyArr.forEach((eachEnemy) => {
        if( eachEnemy.y > 100 && this.frames % 360 === 0){
            
            let bombaPositionX = eachEnemy.x + 25
            let bombaPositionY = eachEnemy.y + 100
           
            let nuevaBomba = new BombaEnemy(bombaPositionX, bombaPositionY)
            this.bombaEnemyArr.push(nuevaBomba)
        }
    })


   
  

    
}


deleteMisil = () => {
    this.misilAvionArr.forEach((eachMisil,index) => {
        if(eachMisil.y < 0){
            this.misilAvionArr.splice(index,1)
        }
    }) 
}
deleteBomba = () => {
    this.bombaEnemyArr.forEach((eachBomba, index) => {
        if(eachBomba.y >760){
            this.bombaEnemyArr.splice(index,1)
        }
    })
}

// COLISIONES

disparoNaveColission = () => {
  this.enemyArr.forEach((eachEnemy, index) => {
    this.misilAvionArr.forEach(( eachMisil,indexMisil) => {
        if(
            eachMisil.x <eachEnemy.x +eachEnemy.w &&
            eachMisil.x + eachMisil.w >eachEnemy.x &&
            eachMisil.y <eachEnemy.y +eachEnemy.h &&
            eachMisil.h + eachMisil.y >eachEnemy.y
        ){ console.log ("colission misil-nave")

        this.misilAvionArr.splice(indexMisil,1)
        this.enemyArr.splice(index,1)
        this.score= this.score +100
          
   } })
  })
  
        //  console.log(this.misilAvionArr[i])
        //     console.log(this.enemyArr[j])
        //    console.log("colission misil nave") 
        //   
           
 // DAMOS VALOR A VARIABLES DE POSICIONAMIENTO BANG
          /* bangX = this.misilAvionArr[i].x
           bangY = this.misilAvionArr[i].y
           let newBang = new Bang(bangX, bangY)
    this.bangArr.push(newBang)*/         
    
  




}

disparoAsteroideColission = () => { this.asteroideArr.forEach((eachAsteroide, index) => {
    this.misilAvionArr.forEach(( eachMisil, indexMisil) => {
        if(
            eachMisil.x <eachAsteroide.x +eachAsteroide.w &&
            eachMisil.x + eachMisil.w >eachAsteroide.x &&
            eachMisil.y <eachAsteroide.y +eachAsteroide.h &&
            eachMisil.h + eachMisil.y >eachAsteroide.y
        ){ console.log ("colission misil-asteroide")

        this.misilAvionArr.splice(indexMisil,1)
        this.asteroideArr.splice(index,1)
        this.score = this.score + 50
          
   } })
  })
  
   
             
               
     // DAMOS VALOR A VARIABLES DE POSICIONAMIENTO BANG
              /* bangX = this.misilAvionArr[i].x
               bangY = this.misilAvionArr[i].y
               let newBang = new Bang(bangX, bangY)
        this.bangArr.push(newBang)*/         
 

}

misilBombaColission = () => {
    this.misilAvionArr.forEach((eachMisil,indexMisil) => {
        this.bombaEnemyArr.forEach((eachBomba,index) => {
            if(
                eachMisil.x <eachBomba.x +eachBomba.w &&
                eachMisil.x + eachMisil.w >eachBomba.x &&
                eachMisil.y <eachBomba.y +eachBomba.h &&
                eachMisil.h + eachMisil.y >eachBomba.y
            ){ //console.log ("colission misil-bomba")
    
            this.misilAvionArr.splice(indexMisil,1)
            this.bombaEnemyArr.splice(index,1)
            this.score = this.score +200
              console.log(score)
       }
        })
    })
}
avionbombaColission = () => {
    this.bombaEnemyArr.forEach((eachBomba) => {
        if(
        this.avionObj.x <eachBomba.x +eachBomba.w &&
        this.avionObj.x + this.avionObj.w >eachBomba.x &&
        this.avionObj.y <eachBomba.y +eachBomba.h &&
        this.avionObj.h + this.avionObj.y >eachBomba.y  
        ) {
            this.gameOver()
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

// dibujado bomba enemigo
  this.bombaEnemyArr.forEach((eachBomba) => {
    eachBomba.drawBombaEnemy()
  })

 // dibujando BAng
/*this.bangArr.forEach((eachBang) => {
    eachBang.drawBang()
 })*/
 
// BORRADO DE DE ELEMENTOS
this.deleteMisil()
this.deleteBomba()

// 3. ACCIONES O METODOS DE LOS ELEMENTOS
this.avionEnemyColission()
this.avionAsteroideColission()
this.avionbombaColission()
this.addEnemy()
this.addAsteroide()
this.addBombaEnemy()




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
// MOVIMIENTO DE LA BOMBA DEL ENEMIGO
    this.bombaEnemyArr.forEach((eachBomba) => {
        eachBomba.moveBombaEnemy()
    })
  

    this.disparoNaveColission()
    this.disparoAsteroideColission()
    this.misilBombaColission() 
   
    // distancia misil
   // this.distanceMisil()





if( this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop)  
}
  
}

}
