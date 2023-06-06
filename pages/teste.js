let btbw = document.getElementById('btbw')
let btfw = document.getElementById('btfw')
let slider = document.getElementById('slider')

btfw.addEventListener('click', (e)=>{
    slider.style.transform = 'translate(-30%)'
})

btbw.addEventListener('click', (e)=>{
    slider.style.transform = 'translate(0)'
})