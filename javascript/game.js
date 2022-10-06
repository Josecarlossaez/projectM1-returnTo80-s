class Game {
  constructor() {
    // PROPIEDADES Y ELEMENTOS DEL JUEGO
    // CREAREMOS UNA CLASE GAME QUE LO VA A ENGLOBAR TODO, DESDE PROPIEDADES HASTA METODOS
    this.avionObj = new Avion();
    this.explosionObj = new Explosion();
    //this.enemyObj = new Enemy()

    // EN EL CASO DEL ENEMIGO Y DE LOS OBSTÁCULOS, NO CREAREMOS EL OBJETO IGUAL QUE EL AVIÓN =>
    // => EN SU LUGAR, CREAREMOS UN ARRAY PARA PODER EXTRAER LA INFO CUANDO TENGAMOS VARIOS.

    this.enemyArr = [];
    this.asteroideArr = [];
    this.misilAvionArr = [];
    this.bangArr = [];
    this.bombaEnemyArr = [];
    this.explosionArr = [];

    // PARA CONTROLAR LA ENTRADA DE OBJETOS EN EL ARRAY, VAMOS A CREAR UN CONTADOR DE FRAMES
    this.frames = 0;

    // CREAMOS UNA VARIABLE PARA PODER MODIFICAR EL SPEED DEL ENEMIGO
    // ESTA VARIABLE ES UNA CARACTERÍSTICA DEL JUEGO, POR ESO NO SE PUEDE CREAR DENTRO DE NINGUNA FUNCIÓN
    this.speedEnemy = 1
    this.speedAsteroide = 0.5
    this.frecuenciaEnemigo = 120

    // PARA QUE EL JUEGO SE DETENGA CREAMOS ESTA VARIABLE Y LE DAMOS UN VALOR BOOLEANO
    this.isGameOn = true;

    // CREACIÓN DE VARIABLE PARA ACTIVAR DIBUJADO DE BOMBA Y DE EXPLOSION

    this.añadirBang = false;
    this.añadirExplosion = false;
    this.explosionX;
    this.explosionY;

    // SCORE
    this.score = 0;
    this.scoreDOM = document.querySelector("#score span");
    this.life = 5;
  }
  
// BONUS AUMENTO VELOCIDAD
  aumentoSpeedEnemy = () =>{
    if (this.frames % 600 === 0 && this.frames < 3600) {
        this.speedEnemy = this.speedEnemy + 0.5
       
        console.log ("Aumentando velocidad")
       
    }
return this.speedEnemy

  }

  aumentoSpeedAsteroide = () =>{
    if (this.frames % 600 === 0 && this.frames < 3600) {
        this.speedAsteroide = this.speedAsteroide + 0.5
    }
    return this.speedAsteroide
  }

//BONUS AUMENTO DE ELEMENTOS EN CANVAS
aumentoFrecuenciaEnemigo = () => {
  if(this.frames % 1350 === 0) {
    this.frecuenciaEnemigo = this.frecuenciaEnemigo/2
  }
}


  // MÉTODOS O ACCIONES DEL JUEGO

  // AÑADIR ELEMENTOS
  addEnemy = () => {
    let frequency = this.frecuenciaEnemigo
   let speed = this.speedEnemy
//   if (this.frames % 600 === 0){
//   speed = speed + 1
  //}
    if (this.frames % frequency === 0) {
      let randomXint = Math.random() * 400;

      let nuevoEnemy = new Enemy(randomXint,speed);
      this.enemyArr.push(nuevoEnemy);

      //console.log(this.enemyArr)
    }
  };

  addAsteroide = () => {
    let speed = this.speedAsteroide
    if (this.frames % 420 === 0) {
      let randomNum2 = Math.random() * 400;
      let randomXint2 = Math.floor(randomNum2);

      let nuevoAsteroide = new Asteriode(randomXint2,speed);
      this.asteroideArr.push(nuevoAsteroide);
      //console.log(this.asteroideArr)
    }
  };

  addMisilAvion = () => {
    let positionX = this.avionObj.x + 20;
    let positionY = this.avionObj.y - 30;

    let nuevoMisil = new MisilAvion(positionX, positionY);
    this.misilAvionArr.push(nuevoMisil);
    // console.log("disparando misil")
    // console.log(this.misilAvionArr)
  };

  addBombaEnemy = () => {
    this.enemyArr.forEach((eachEnemy) => {
      if (eachEnemy.y > 10 && this.frames % 120 === 0) {
        let bombaPositionX = eachEnemy.x + 25;
        let bombaPositionY = eachEnemy.y + 100;

        let nuevaBomba = new BombaEnemy(bombaPositionX, bombaPositionY);
        this.bombaEnemyArr.push(nuevaBomba);
      }
    });
  };

  addBang = () => {
    let bangX = this.avionObj.x;
    let bangY = this.avionObj.y - 30;
    if (this.añadirBang === true) {
      let nuevoBang = new Bang(bangX, bangY);
      this.bangArr.push(nuevoBang);
    }
  };

  //  BORRADO DE ELEMENTOS QUE SE SALEN DEL CANVAS POR ABAJO

  deleteMisil = () => {
    this.misilAvionArr.forEach((eachMisil, index) => {
      if (eachMisil.y < 0) {
        this.misilAvionArr.splice(index, 1);
      }
    });
  };

  deleteBomba = () => {
    this.bombaEnemyArr.forEach((eachBomba, index) => {
      if (eachBomba.y > 760) {
        this.bombaEnemyArr.splice(index, 1);
      }
    });
  };

  deleteEnemigo = () => {
    this.enemyArr.forEach((eachEnemy,index) => {
      if (eachEnemy.y > 760){
        this.enemyArr.splice(index,1)
      }
    })
  }
  deleteAsteroide = () => {
    this.asteroideArr.forEach((eachAsteroide,index) => {
      if(eachAsteroide.y > 760) {
        this.asteroideArr.splice(index,1)
      }
    })
  }

  // COLISIONES

  avionEnemyColission = () => {
    this.enemyArr.forEach((eachEnemy, index) => {
      if (
        this.avionObj.x < eachEnemy.x + eachEnemy.w &&
        this.avionObj.x + this.avionObj.w > eachEnemy.x &&
        this.avionObj.y < eachEnemy.y + eachEnemy.h &&
        this.avionObj.h + this.avionObj.y > eachEnemy.y
      ) {
        this.enemyArr.splice(index, 1);
        this.life = this.life - 1;
        this.avionObj.y = this.avionObj.y + 50;

        this.añadirBang = true;
        setTimeout(() => {
          this.añadirBang = false;
        }, 1);

        this.bangArr.forEach((eachBang, index) => {
          setTimeout(() => {
            this.bangArr.splice(eachBang, 1);
          }, 1000);
        });
        setTimeout(() => {
          this.avionObj.y = this.avionObj.y + 50;
        }, 200);

        //console.log( "colission")
      }
    });
  };

  avionAsteroideColission = () => {
    this.asteroideArr.forEach((eachAsteroide, index) => {
      if (
        this.avionObj.x < eachAsteroide.x + eachAsteroide.w &&
        this.avionObj.x + this.avionObj.w > eachAsteroide.x &&
        this.avionObj.y < eachAsteroide.y + eachAsteroide.h &&
        this.avionObj.h + this.avionObj.y > eachAsteroide.y
      ) {
        this.asteroideArr.splice(index, 1);
        this.life = this.life - 1;
        this.avionObj.y = this.avionObj.y + 50;

           this.añadirBang = true;
        // setTimeout(() => {
        //   this.añadirBang = false;
        // }, 1);

        // this.bangArr.forEach((eachBang, index) => {
        //   setTimeout(() => {
        //     this.bangArr.splice(eachBang, 1);
        //   }, 1000);
        // });
        // setTimeout(() => {
        //   this.avionObj.y = this.avionObj.y + 50;
        // }, 200);
     
       
      }
    });
    if (this.frames % 2 === 0) {
      this.añadirBang = false;
    }
    if (this.frames % 60 === 0) {
      this.bangArr.forEach((eachBang) => {
        this.bangArr.splice(eachBang, 1);
      });
    }
  };
  avionbombaColission = () => {
    this.bombaEnemyArr.forEach((eachBomba, index) => {
      if (
        this.avionObj.x < eachBomba.x + eachBomba.w &&
        this.avionObj.x + this.avionObj.w > eachBomba.x &&
        this.avionObj.y < eachBomba.y + eachBomba.h &&
        this.avionObj.h + this.avionObj.y > eachBomba.y
      ) {
        this.bombaEnemyArr.splice(index, 1);
        this.life = this.life - 1;
        this.avionObj.y = this.avionObj.y + 50;

        this.añadirBang = true;
       
      }
    });
    if (this.frames % 2 === 0) {
      this.añadirBang = false;
    }
    if (this.frames % 60 === 0) {
      this.bangArr.forEach((eachBang) => {
        this.bangArr.splice(eachBang, 1);
      });
    }
  };


  disparoNaveColission = () => {
    this.enemyArr.forEach((eachEnemy, index) => {
      this.misilAvionArr.forEach((eachMisil, indexMisil) => {
        if (
          eachMisil.x < eachEnemy.x + eachEnemy.w &&
          eachMisil.x + eachMisil.w > eachEnemy.x &&
          eachMisil.y < eachEnemy.y + eachEnemy.h &&
          eachMisil.h + eachMisil.y > eachEnemy.y
        ) {
          console.log("colission misil-nave");

          this.misilAvionArr.splice(indexMisil, 1);
          this.enemyArr.splice(index, 1);
          this.score = this.score + 100;
          this.scoreDOM.innerText = this.score;
          soundMisilNaveBomba2.play()
          soundMisilNaveBomba2.volume = 0.2
        }
      });
    });

    //  console.log(this.misilAvionArr[i])
    //     console.log(this.enemyArr[j])
    //    console.log("colission misil nave")
    //

    // DAMOS VALOR A VARIABLES DE POSICIONAMIENTO BANG
    /* bangX = this.misilAvionArr[i].x
           bangY = this.misilAvionArr[i].y
           let newBang = new Bang(bangX, bangY)
    this.bangArr.push(newBang)*/
  };

  disparoAsteroideColission = () => {
    this.asteroideArr.forEach((eachAsteroide, index) => {
      this.misilAvionArr.forEach((eachMisil, indexMisil) => {
        if (
          eachMisil.x < eachAsteroide.x + eachAsteroide.w &&
          eachMisil.x + eachMisil.w > eachAsteroide.x &&
          eachMisil.y < eachAsteroide.y + eachAsteroide.h &&
          eachMisil.h + eachMisil.y > eachAsteroide.y
        ) {
          console.log("colission misil-asteroide");

          this.misilAvionArr.splice(indexMisil, 1);
          //this.asteroideArr.splice(index,1)
          this.score = this.score + 50;
          this.scoreDOM.innerText = this.score;

          // DIBUJADO DE EXPLOSIÓN
          this.explosionX = eachMisil.x;
          this.explosionY = eachMisil.y;
          soundMisilMetal.play()
          soundMisilMetal.volume = 0.3
          this.añadirExplosion = true;

       

          // for (let i=0; i<this.explosionArr.length; i++){
          //     this.explosionArr.shift()
          // }

          //  let explosion =setInterval(()=> {
          //     this.añadirExplosion ===true
          //     console.log("interval")
          //  },750)
          //  setTimeout(()=> {
          //     clearInterval(explosion)
          //  },1000)
        }
      });
    });
    if (this.frames % 2 === 0) {
      this.añadirExplosion = false;
    }
    if (this.frames % 60 === 0) {
      this.explosionArr.forEach((eachExplosion) => {
        this.explosionArr.splice(eachExplosion, 1);
      });
    }
  };
  addExplosion = () => {
    if (this.añadirExplosion === true) {
      let nuevaExplosion = new Explosion(this.explosionX, this.explosionY);
      this.explosionArr.push(nuevaExplosion);
    }
  };

  misilBombaColission = () => {
    this.misilAvionArr.forEach((eachMisil, indexMisil) => {
      this.bombaEnemyArr.forEach((eachBomba, index) => {
        if (
          eachMisil.x < eachBomba.x + eachBomba.w &&
          eachMisil.x + eachMisil.w > eachBomba.x &&
          eachMisil.y < eachBomba.y + eachBomba.h &&
          eachMisil.h + eachMisil.y > eachBomba.y
        ) {
          //console.log ("colission misil-bomba")

          this.misilAvionArr.splice(indexMisil, 1);
          this.bombaEnemyArr.splice(index, 1);
          this.score = this.score + 200;
          console.log(this.score);
          this.scoreDOM.innerText = this.score;
          soundMisilNaveBomba.play()
          soundMisilNaveBomba.volume = 0.2
        }
      });
    });
  };


  // DIBUJADO DEL SCORE Y VIDAS

  drawScore = () => {
    ctx.font = "20px Orbitron";
    ctx.fillStyle = "rgb(176, 176, 8)";

    // (elTexto, posX, posY)
    let scoreStr = `Score: ${this.score}                                          Life:${this.life}`;
    ctx.fillText(scoreStr, canvas.width * 0.1, 25);
  };
  died = () => {
    if (this.life === 0) {
      this.gameOver();
    }
  };

  gameOver = () => {
    // CAMBIAMOS LA CONDICIÓN QUE MANTIENE EL JUEGO EN MARCHA
    this.isGameOn = false;
    // OCULTAMOS EL CANVAS, Y MOSTRAMOS EL SCREEN DE GAME OVER
    canvas.style.display = "none";
    // ACTIVAMOS LA PANTALLA GAME OVER
    gameOverScreen.style.display = "flex";

    soundOngame.pause();
    soundGameOver.play();
    soundGameOver.loop = true;
    soundGameOver.volume = 0.1;
  };

  // FUNCIÓN DE RECURSIÓN

  gameLoop = () => {
    // ACTIVACIÓN DE LA VARIABLE FRAMES
    this.frames = this.frames + 1;

    // ACTIVACIÓN DE LA FUNCIÓN aumentoSpeedEnemy y aumentoSpeedAsteroide
    this.aumentoSpeedAsteroide() 
    this.aumentoSpeedEnemy()
    
    //ACTIVACIÓN DE LA FUNCIÓN PARA AUMENTAR LA FRECUENCIA DE ELEMENTOS
    this.aumentoFrecuenciaEnemigo()
    


    // 1. LIMPIAR EL CANVAS

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. DIBUJADO DE LOS ELEMENTOS
    // dibujando avión
    this.avionObj.drawAvion();

    // dibujando enemy
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    }); // dibujando asteroide
    this.asteroideArr.forEach((eachAsteroide) => {
      eachAsteroide.drawAsteroide();
    });
    // dibujando misil avión
    this.misilAvionArr.forEach((eachMisil) => {
      eachMisil.drawMisilAvion();
    });

    // dibujado bomba enemigo
    this.bombaEnemyArr.forEach((eachBomba) => {
      eachBomba.drawBombaEnemy();
    });

    // DIBUJADO DE BANG
    this.bangArr.forEach((eachBang) => {
      eachBang.drawBang();
    });
    // DIBUJADO DE EXPLOSION
    this.explosionArr.forEach((eachExplosion) => {
      eachExplosion.drawExplosion();
    });

    //   DIBUJADO SCORE
    this.drawScore();

    // dibujando BAng
    this.bangArr.forEach((eachBang) => {
      eachBang.drawBang();
    });

    // BORRADO DE DE ELEMENTOS
    this.deleteMisil();
    this.deleteBomba();
    this. deleteEnemigo();
    this.deleteAsteroide(); 

    // 3. ACCIONES O METODOS DE LOS ELEMENTOS
    this.avionEnemyColission();
    this.avionAsteroideColission();
    this.avionbombaColission();
    this.addEnemy();
    this.addAsteroide();
    this.addBombaEnemy();
    this.died();
    this.addBang();
    this.addExplosion();

    this.avionObj.goUp();
    this.avionObj.goDown();
    this.avionObj.goLeft();
    this.avionObj.goRight();

    // MOVIMIENTO DEL ENEMY
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });

    // MOVIMIENTO DEL ASTEROIDE
    this.asteroideArr.forEach((eachAsteroide) => {
      eachAsteroide.moveAsteroide();
    });
    // MOVIMIENTO DEL MISIL DEL AVION
    this.misilAvionArr.forEach((eachMisil) => {
      eachMisil.moveMisilAvion();
    });
    // MOVIMIENTO DE LA BOMBA DEL ENEMIGO
    this.bombaEnemyArr.forEach((eachBomba) => {
      eachBomba.moveBombaEnemy();
    });

    this.disparoNaveColission();
    this.disparoAsteroideColission();
    this.misilBombaColission();
   
    // distancia misil
    // this.distanceMisil()

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
