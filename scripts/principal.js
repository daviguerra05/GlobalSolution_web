const toggle = document.querySelector('#toggle')
const fome = document.querySelector('#fome')

function mudar(valorx){
    var texto = document.getElementById('fome_divider')
    valorx = (valorx - 2000)/40;
    texto.style.transform = `translate( ${valorx}%)`
}

document.addEventListener('mousemove', (evento) => {
    const mouseX = evento.clientX;
    mudar(mouseX)
    // console.log(mouseX)
})

toggle.addEventListener('click',(e)=>{
    var is_toggle = toggle.checked
    if(!is_toggle == true){
        fome.style.background = 'black'
    }
    else{
        fome.style.background = 'white'
    }
})
    