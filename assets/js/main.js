//Declaração vars
var toggleOverlay = document.querySelectorAll('.toggle-overlay');
var toggleMenuMob = document.querySelectorAll('.toggle-menu-mob');


//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.preloader');
    pagePreloder.classList.add('preloader-anim'); 
    // console.log("Terminou o carregamento dos bagui tudo! ");
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Overlay do iframe dos projetos
for (var i = 0; i < toggleOverlay.length; i++) {
    toggleOverlay[i].addEventListener('click', function() {
        var overlayGalery = document.querySelector('.overlay-galery');
        var boxFrameGalery = document.querySelector('.box-frame-galery');
        overlayGalery.classList.toggle('overlay-galery-open');
        boxFrameGalery.classList.toggle('box-frame-galery-open');
        // console.log(overlayGalery);
        // console.log(boxFrameGalery);        
    });
}

//Menu mobile
for (var i = 0; i < toggleMenuMob.length; i++) {
    toggleMenuMob[i].addEventListener('click', function() {
        var menuMob = document.querySelector('.menu-mob');
        var menuOps = document.querySelector('.menu-ops');
        var acabamntMob = document.querySelector('.acabamento-mob');         
        menuMob.classList.toggle('menu-mob-open');
        menuOps.classList.toggle('menu-ops-open');
        acabamntMob.classList.toggle('acabamento-mob-open')
        console.log(toggleMenuMob);       
    });
}

//Aqui eu criei um jeito e gerar o link para o projeto para carregar no iframe
//Sim, não pensei num nome melhor para o parâmetro recebido. Mas valor serve. :/
function btnProj(valor) {
    document.getElementById("frame-principal").src = "./portfolio/"+valor+"/index.html";    
    // console.log(valor);
    
}

//Isso não funcionou local devido a políticas de segurança, (Same Origin Policy )
//Mas o código fica para eu me lembrar que preciso tentar contornar isso.
//objetivo é trocar uma página de erro padrão do nabegador por uma personalizada. 
document.getElementsByTagName('iframe').onerror = function() {errorEventFrame()};

function errorEventFrame() {
    document.getElementById("frame-principal").src = "./portfolio/error.html"; 
}

