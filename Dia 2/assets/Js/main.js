//Se procede a crear las constantes
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


//Se crea un indice que significa que cuando se active estara acti a el num 1
let currentActive = 1

//Se crea el siguiente evento para que cuando uno de clic en el boton next vaya contabilizando de acuerdo a su numeracion
next.addEventListener('click', () => {
    currentActive++

    //vamos a crear un if para limitar el contador de circulos y no continue contando
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    
    update();
    
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})


function  update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}







