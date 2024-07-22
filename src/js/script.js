// Vinculação do HTML
const playlistName = document.querySelector("#paylistName");
const songCover = document.querySelector("#musicCover");
const songName = document.querySelector("#nomeMusica");
const songNameArtist = document.querySelector("#nomeArtista");
const songAudio = document.querySelector("#musicAudio");
const songProgressBar = document.querySelector(".progresso");
const containerProgress = document.querySelector(".containerProgresso");
const btnSongPLay = document.querySelector("#btnPausar");
const btnSongSkip = document.querySelector("#btnPassar");
const btnSongBack = document.querySelector("#btnVoltar");
const btnlyrics = document.querySelector("#btnLetras");
const cadastroMusic = document.querySelector("#cadastroMusica");
// Declaração dos objetos prncipais
const k60 = {
    nome: "60k",
    nomeArtista: "major-rd",
    file: "60k",
    letra: "opa nativa 60k"
};
const liderança = {
    nome: "liderança",
    nomeArtista: "major-rd e borges",
    file: "liderança",
    letra: "opa nativa lideranca"
};
const vibranium = {
    nome: "vibranium",
    nomeArtista: "major-rd e nog",
    file: "vibranium",
    letra: "opa nativa vibranium"
};
const abelhas = {
    nome: "abelhas e moscas",
    nomeArtista: "mc sid",
    file: "abelhas e moscas",
    letra: "opa nativa abelhas e moscas"
};
const musicList = [k60, liderança, vibranium, abelhas];//Array de objetos
let isplaying = false;//Variavel de verificação de toca
let musicIndex = 0;//Localização de inicio da playlist em relao ao array de objetos
// Função de carregar som 
function loadsong() {
    songCover.src = `./img/${musicList[musicIndex].file}.jpg`;
    songAudio.src = `./audio/${musicList[musicIndex].file}.mp3`;
    songName.innerText = musicList[musicIndex].nome;
    songNameArtist.innerText = musicList[musicIndex].nomeArtista;
}
// Função de rodar o som
function songPlay() {
    btnSongPLay.classList.remove("bi-play-circle-fill");
    btnSongPLay.classList.add("bi-pause-circle-fill");
    songAudio.play();
    isplaying = true;
}
// Função de pausar o som 
function songPause() {
    btnSongPLay.classList.add("bi-play-circle-fill");
    btnSongPLay.classList.remove("bi-pause-circle-fill");
    songAudio.pause();
    isplaying = false;
}

loadsong()//atualização do som
// barra de progresso
songAudio.addEventListener("timeupdate", () => {
    const barWidth = (songAudio.currentTime / songAudio.duration) * 100;
    songProgressBar.style.setProperty("--progress", `${barWidth}%`);
})
containerProgress.addEventListener("click", (event) => {
    const clickPosition = event.offsetX;
    const jumtoTime = (clickPosition / containerProgress.clientWidth) * songAudio.duration;
    songAudio.currentTime = jumtoTime;
})
// função de voltar musica
btnSongBack.addEventListener("click", () => {
    if (musicIndex === 0) {
        musicIndex = musicList.length - 1;
    } else {
        musicIndex -= 1;
    }
    loadsong();
    songPlay();
});
// função de pular musica
btnSongSkip.addEventListener("click", () => {
    if (musicIndex === musicList.length - 1) {
        musicIndex = 0
    } else {
        musicIndex += 1;
    }
    loadsong();
    songPlay();
});
// Ação de pausar/soltar musica
btnSongPLay.addEventListener("click", () => {
    if (isplaying === true) {
        songPause();
    } else {
        songPlay();
    }
});
btnlyrics.addEventListener("click", () => {
    const contLyrics = document.querySelector(".contLetras");
    const lyrics = document.querySelector(".letras");
    contLyrics.classList.toggle("block");
    lyrics.innerText = musicList[musicIndex].letra;
});
cadastroMusic.addEventListener("click", () => {
    const dlgcadastro = document.querySelector(".cadastro");
    dlgcadastro.classList.toggle("block");
})