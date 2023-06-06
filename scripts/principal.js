window.addEventListener('load', (loaded)=>{
    
    // Variáveis para elementos do HTML
    const toggle = document.querySelector('#toggle')
    const body = document.querySelector('body')
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')
    const sec5 = document.getElementById('sec5')

    let form = document.querySelector('form')
    let name = document.getElementById('name')
    let number = document.getElementById('number')
    let email = document.getElementById('email') 
    let mensagem = document.getElementById('mensagem')
    let formButton = document.getElementById('formButton')

    // Variáveis para dark mode
    var white = "#FCF7F8"
    var black = "#00241B"

    // Função para x do divider se mover com o x do mouse 
    function mudar(valorx){
        var texto = document.getElementById('fome_divider')
        valorx = (valorx - 2000)/40;
        texto.style.transform = `translate( ${valorx}%)`
    }

    // Evento para executar a função do divider
    document.addEventListener('mousemove', (evento) => {
        const mouseX = evento.clientX;
        mudar(mouseX)
    })


    // Lógica para dark mode
    toggle.addEventListener('click',(e)=>{
        var is_toggle = toggle.checked
        if(!is_toggle == true){
            body.style.color = white
            body.style.background = black
            h2.style.background = white
            h3.style.background = white
            sec5.style.background = 'black'
        }
        else{
            body.style.color = black
            body.style.background = white
            h2.style.background = black
            h3.style.background = black
            sec5.style.background = black
        }
    })

    form.onsubmit = function(){
        alert('FOI!')
    }
})