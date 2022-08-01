const toggler = document.getElementById('toggler')
const menu = document.getElementById('menu')

let show = false
function showMenu(){
    if(show){
        menu.style.left = '-100%'
        show = false
    }else{
        menu.style.left = '0'
        show = true
    }
}