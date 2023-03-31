//Menu hamburguesa
const $btnHamburger = document.querySelector(".panel-btn");
const $containerMenu = document.querySelector(".nav");
const $libtn = document.querySelectorAll('.li');
const $btnUp = document.querySelector('.scroll-top-btn');


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
const $iniciarAlamrma = document.getElementById('iAlarma');
const $detenerAlamrma = document.getElementById('dAlarma');
const $alarm = document.createElement('audio');
const sound = 'assets/alarma-morning-mix.mp3';
$alarm.src = sound;

let reloj = document.getElementById('showTime');
let intervalo;
let alarmTempo;

$iniciar.addEventListener('click', (e) => {
    const mostrarReloj = () => {
        
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
    intervalo = setInterval(mostrarReloj, 1000);
    e.target.disabled = true;
});

$detener.addEventListener('click', (e) => {
    $iniciar.disabled = false;
    clearInterval(intervalo);
    reloj.innerHTML = null;
})

$iniciarAlamrma.addEventListener('click', (e) => {
    alarmTempo = setTimeout(() => {
        $alarm.play();
    }, 2000);
    e.target.disabled = true;
});

$detenerAlamrma.addEventListener('click', (e) => {
    clearTimeout(alarmTempo);
    $alarm.pause();
    $alarm.currentTime = 0;
    $iniciarAlamrma.disabled = false;
});


//Evento del Teclado


const stage = document.querySelector('.stage');
const ball = document.querySelector('.ball');



//Boton Scroll

window.addEventListener('scroll', function() {
    let scrollPosY = window.scrollY;
    if(scrollPosY > 400) {
        $btnUp.classList.remove('hidden')
    } else {
        $btnUp.classList.add('hidden')
    }
    // console.log(scrollPosY);
});


$btnUp.addEventListener('click', (e) => {
    if(e.target.classList.contains('scroll-top-btn')) {
        window.scrollTo({
            behavior:'smooth',
            top: 0,
        })
    }
});