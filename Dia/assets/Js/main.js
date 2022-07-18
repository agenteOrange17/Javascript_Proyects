
/* Para activar las imagenes*/
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        activeClases();
        panel.classList.add('active');
    })
});

function activeClases() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
/* Para remover al clicear en uno */