//Menu hamburguesa
const $btnHamburger = document.querySelector(".panel-btn");
const $containerMenu = document.querySelector(".nav");
const $libtn = document.querySelectorAll('.li');


$btnHamburger.addEventListener('click', (e) => {
    $btnHamburger.classList.toggle('is-active');
    $containerMenu.classList.toggle('nav-hamburguer');
 
})

$libtn.forEach((link) => {
    link.addEventListener('click', (e) => {
        $btnHamburger.classList.remove('is-active');
        $containerMenu.classList.toggle('nav-hamburguer');
    })
});

//Reloj Digital


const $iniciar = document.getElementById('iniciar')
const $detener = document.getElementById('detener')


$iniciar.addEventListener('click', (e) => {
    const mostrarReloj = () => {
        let reloj = document.getElementById('showTime');
        
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        
        
        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;
        
        let time = `${hh}:${mm}:${ss}`;
        reloj.innerHTML = time;
        
    }
    setInterval(() => {
        mostrarReloj();
    })
    e.target.disabled = true;
    console.log(e.target.disabled = false);
})