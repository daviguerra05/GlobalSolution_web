window.addEventListener('load', (loaded)=>{
    
    const toggle = document.querySelector('#toggle')
    const body = document.querySelector('body')
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')
    const ai = document.querySelector('#AI')
    const sec5 = document.getElementById('sec5')

    var white = "#FCF7F8"
    var black = "#00241B"


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


    

})