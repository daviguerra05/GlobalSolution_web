window.addEventListener('load', (loaded)=>{

    let button = document.getElementById('button')

    button.onclick = function(){
        window.location.href = './pages/principal.html'
    }

    let data = document.getElementById('data')
    let time = document.getElementById('time')

    setInterval((e)=>{
        let d = new Date()
        data.innerHTML = d.toLocaleDateString()
        time.innerHTML = d.toLocaleTimeString()
        button.style.display ='flex'
    },1000)

    alert('Seja bem vindo')
})



