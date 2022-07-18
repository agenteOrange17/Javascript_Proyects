
/* Para activar las imagenes*/

/* Se crea una clase que seleccione todos los paneles*/
const panels = document.querySelectorAll('.panel');

//Se toma la constante en un forEach para recorrer todos los panels
panels.forEach((panel) => {
    //Se crea un evento para que cuando se haga click agregue la clase active con un arrow-function
    panel.addEventListener('click', () => {
        //Se crea una funcion activeClases para eliminar el active al darle click al card
        activeClases();
        panel.classList.add('active');
    })
});


//Se manda a llamar la funcion de activeClases para eliminar la clase active
function activeClases() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
/* Para remover al clicear en uno */