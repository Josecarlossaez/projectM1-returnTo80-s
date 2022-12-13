


 
# SPACE - FIGHTER



# Puedes visitar el juego aquí: https://josecarlossaez.github.io/space-fighter/


# Description

Space-fighter es un juego 2D que tiene el objetivo de lograr el máximo de puntuación, eliminando naves enemigas y explotando sus bombas con tus misiles.
El único elemento que no puedes eliminar son los asteroides. Cualquier toque con cualquier elemento resta una vida, y sólo tienes 5.

# Funcionalidades Principales

Creación, dibujado y posicionado de elementos en el canvas.
Movimientos y colisiones de los elementos

# Funcionalidades no esenciales

Aumento de velocidad y de frecuencia de aparición de los elementos.
Inserción de música e imágenes en las colisiones

# Estructura del proyecto



## main.js

- startGame()
- addEventListeners()
- Coordinación de las diferentes pantallas

## game.js

- Game () {
    this.player;
}
- addEnemies()
- aumento de velocidades()
- disparos()
- checkCollisions () {}
- gameOver()
- gameLoop () {}


## avion.js 

- Avion () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawAvion () {}
- moveAvion () {
    diferentes funciones para crear movimiento contínuo
}

## enemigo.js 

- enemigo() {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawEnemy () {}
- moveEnemy () {}

## asteroide.js 

- asteroide () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawAsteroide () {}
- moveAsteroide () {}

## misil-avion.js 

- misilAvion () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawMisilAvion () {}
- moveMisilAvion () {}

## bombaEnemy.js 

- BombaEnemy () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawBombaEnemy () {}
- moveBombaEnemy () {}

## bang.js 

- Bang() {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawBang () {}
- moveBang () {}

## explosion.js 

- Explosion () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawExplosion () {}


# Estados y transiciones

- Start Screen, Game Screen, Game Over Screen.

# Tareas 

FASE 1: 
- CREACIÓN DE ESCENARIOS EN HTML

FASE 2:
- ADECUACIÓN DE LOS ESCENARIOS CON CSS

FASE 3:
- CREACIÓN DE ARCHIVOS JS
    - Agregar cláusulas básicas para ctx
    - Crear funciones principales de juego
    - Comentar las ejecuciones del juego para después desarrollarlas

FASE 4:
- ELEMENTO PRINCIPAL, AVIÓN COMANDANTE
    - Dibujado y posicionado del avión
    - Generación de movimientos avión principal

FASE 5:
- ENEMIGO.
    - Dibujado y posicionado en la pantalla
    - Generación del movimiento y de la aleatoriedad en su salida    

FASE 6:
- OBSTÁCULO.
    - Dibujado y posicionado en la pantalla
    - Generación del movimiento y de la aleatoriedad en su salida  

FASE 7:
- COLISIONES AVIÓN - ENEMY Y AVIÓN - ASTEROIDE   

FASE 8:
- DISPARO AVIÓN
    - El misil aparece en la pantalla y se mueve
    - El misil sale desde la punta del avión
    - El misil se borra al salir del canvas

FASE 9:
- COLISIÓN MISIL-NAVE, Y COLISIÓN MISIL-ASTEROIDE
    - Desaparición de la nave
    - Desaparición del asteroide

FASE 10:
- DISPARO DEL ENEMIGO
    - Dibujado y posicionado de la bomba 
    - movimiento de la bomba
    - desaparición de la bomba cuando salga fuera del canvas
FASE 11:
- COLISIÓN ENTRE MISIL Y BOMBA ENEMIGA
    - Desaparecen los dos.

FASE 12:
- VIDAS

FASE 13:
- SCORE

FASE 14:
- BOTÓN RESTART "HOME"
- EL AVIÓN NO SE SALE DEL CANVAS

FASE 15:
- MOVIMIENTO CONTÍNUO DEL AVIÓN

FASE 16
- AUMENTO DE VELOCIDAD CADA CIERTO TIEMPO

FASE 17
- AUMENTO DE LA FRECUENCIA DE SALIDA DEL ENEMIGO

FASE 18:
- EXPLOSIÓN EN LA COLISIÓN MISIL CON ASTEROIDE

FASE 19:
- APARECE UN BANG, CADA VEZ QUE HAY UNA COLISIÓN DEL AVIÓN CON CUALQUIER ELEMENTO. ADEMÁS SE PIERDE UNA VIDA

FASE 20:
- INTRODUCCIÓN DE SONIDOS AL DISPARAR SOBRE LOS ELEMENTOS

FASE 21
- LOCAL STORAGE PARA BEST SCORE



    