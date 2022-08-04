const toggler = document.getElementById('toggler')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

let show = false
function showMenu(){
    if(show){
        menu.style.left = '-100%'
    }else if(body.style.width <= '375px'){
        menu.style.left = '-5%'
    }else{
        menu.style.left = '0%'
    }
    show = !show
}