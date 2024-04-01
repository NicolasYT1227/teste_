const botaoPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('capitulos');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('name-capitulo');

const quantidadeCapitulos = 10;
let taTocando = 0;
let capitulo = 1;

function tocaFaixa(){
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    taTocando = 1;
}

function pausaFaixa(){
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    taTocando = 0;
}

function tocaOuPausaFaixas(){
    if(taTocando === 0){
        tocaFaixa();
    } else {
        pausaFaixa();
    }
}

function trocaNomeCapitulo(){
    nomeCapitulo.innerHTML = "Capitulo " + capitulo;
}

function capituloAnterior(){
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    trocaNomeCapitulo();
    tocaFaixa();
}

function proximoCapitulo(){
    if(capitulo < quantidadeCapitulos){
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    trocaNomeCapitulo();
    tocaFaixa();
}

botaoPlayPause.addEventListener('click', tocaOuPausaFaixas);
botaoProximo.addEventListener('click', proximoCapitulo);
botaoAnterior.addEventListener('click', capituloAnterior);
