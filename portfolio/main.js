const toggler = document.getElementById('toggler')
const menu = document.getElementById('menu')

let show = false
function showMenu() {
    if (show) {
        menu.style.display = 'none'
        menu.style.left = '-100%'
        show = false
    } else {
        menu.style.display = 'block'
        menu.style.left = '0%'
        show = true
    }
}

const text = document.getElementById('text')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const pastga = document.getElementById('pastga')

let down = false
function downText() {
    if (down) {
        text.style.height = '25vh'
    } else {
        text.style.height = '100%'
    }
    down = !down
}
let down2 = false
function downText1() {
    if (down2) {
        text1.style.height = '25vh'
    } else {
        text1.style.height = '100%'
    }
    down2 = !down2
}
let down3 = false
function downText2() {
    if (down3) {
        text2.style.height = '25vh'
    } else {
        text2.style.height = '100%'
    }
    down3 = !down3
}
