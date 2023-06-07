window.addEventListener('load', (loaded)=>{
    
    // Variáveis para elementos do HTML
    const toggle = document.querySelector('#toggle')
    const body = document.querySelector('body')
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')
    const sec5 = document.getElementById('sec5')
    const left_arrow = document.getElementById('left_arrow')
    const right_arrow = document.getElementById('right_arrow') 

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
            left_arrow.src='../images/left-arrow_white.png'
            right_arrow.src='../images/right-arrow_white.png'
        }
        else{
            body.style.color = black
            body.style.background = white
            h2.style.background = black
            h3.style.background = black
            sec5.style.background = black

            right_arrow.src='../images/right-arrow.png'
            left_arrow.src='../images/left-arrow.png'
        }
    })

    form.onsubmit = function(){
        alert('Mensagem enviada com sucesso!')
    }

    let proximo = document.getElementById('proximo')
    let anterior = document.getElementById('anterior')
    let carrossel = document.getElementById('carrossel')
    let n = 2

    function remover_blur(){
        var img = document.querySelector(`#carrossel img:nth-child(${n})`)
        img.style.filter = 'blur(0)'
    }

    function adicionar_blur(){
        var img = document.querySelector(`#carrossel img:nth-child(${n})`)
        img.style.filter = 'blur(5px)'
    }

    function atulizar_blur(x){
        adicionar_blur()
        n = n + x
        remover_blur()
        if(n == 1){
            carrossel.style.transform = 'translate(13%)'
        }
        if(n == 2){
            carrossel.style.transform = 'translate(-5.5%)'
        }
        if(n == 3){
            carrossel.style.transform = 'translate(-26.5%)'
        }
        if(n == 4){
            carrossel.style.transform = 'translate(-46%)'
        }
    }
    
    proximo.addEventListener('click', (e)=>{
        if(n != 4){
            atulizar_blur(1)
        }  
    })

    anterior.addEventListener('click', (e)=>{
        if(n != 1){
            atulizar_blur(-1)
        }
    })
})