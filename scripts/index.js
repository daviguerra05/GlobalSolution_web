window.addEventListener('load', (loaded)=>{
    alert('Seja bem vindo')
})

var button = document.getElementById('button')

button.onclick = function(){
    window.location.href = './pages/principal.html'
}