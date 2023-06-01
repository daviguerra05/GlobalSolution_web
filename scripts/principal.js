function mudar(valorx){
    var texto = document.getElementById('fome_divider')
    valorx = (valorx - 2000)/40;
    texto.style.transform = `translate( ${valorx}%)`
}

document.addEventListener('mousemove', (evento) => {
    const mouseX = evento.clientX;
    mudar(mouseX)
    console.log(mouseX)
})