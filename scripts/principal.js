const toggle = document.querySelector('#toggle')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')
const ai = document.querySelector('#AI')

var white = "white"
var black = "rgb(94, 94, 94)"

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
        body.style.color = white
        body.style.background = black
        h2.style.background = white
    }
    else{
        body.style.color = black
        body.style.background = white
        h2.style.background = black
    }
})
    