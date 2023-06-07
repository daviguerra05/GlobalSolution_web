window.addEventListener('load', (loaded)=>{
    alert('Seja bem vindo')
})

var button = document.getElementById('button')

button.onclick = function(){
    window.location.href = './pages/principal.html'
}

let data = document.getElementById('data')
let time = document.getElementById('time')


setInterval((e)=>{
    let d = new Date()
    data.innerHTML = d.toLocaleDateString()
    time.innerHTML = d.toLocaleTimeString()
},1000)

