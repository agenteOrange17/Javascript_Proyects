//Se procede a crear las constantes
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


//Se crea un indice que significa que cuando se active estara acti a el num 1
let currentActive = 1

//Se crea el siguiente evento para que cuando uno de clic en el boton next vaya contabilizando de acuerdo a su numeracion
next.addEventListener('click', () =>{
    currentActive++

    //vamos a crear un if para limitar el contador de circulos y no continue contando
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    
    
})