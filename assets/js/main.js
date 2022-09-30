var menuBtn = document.getElementById('menu-btn')
var menuToggle = false

menuBtn.addEventListener('click', menyToggle)

function menyToggle() {
    if (menuToggle === false) {
        menuToggle = true
        document.getElementById('nav-menu').classList.add('active')
    } else {
        menuToggle = false
        document.getElementById('nav-menu').classList.remove('active')
    }
}
