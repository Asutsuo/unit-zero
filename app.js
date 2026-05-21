//VISUALIZADOR DE ONDAS SONORAS

const visualizer = document.querySelector("#visualizer");
const bars = []

for (let i = 0; i < 64; i++){
    const bar = document.createElement("div")
    bar.classList.add("bar")
    visualizer.appendChild(bar)
    bars.push(bar)
    bar.style.height = "6px"
};

//KNOB - CONTROLE DE ÁUDIO

const knob = document.querySelector(".volume-knob")

let arrastando = false;

knob.addEventListener('mousedown', (event) =>{
    event.preventDefault();
    arrastando = true;

    document.body.classList.add("dragging");
})

document.addEventListener('mouseup', () =>{
    arrastando = false;

    document.body.classList.remove("dragging");
})

document.addEventListener('mousemove', (event) =>{
    if(!arrastando) return;

    const reta = knob.getBoundingClientRect();

    const centerX = reta.left + reta.width / 2;
    const centerY = reta.top + reta.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const radianos = Math.atan2(dy, dx);
    let graus = radianos * (180/Math.PI);

    graus+=90;

    knob.style.transform = `rotate(${graus}deg)`;
})

//ÁREA DE TESTES MUSICAIS UI UI

const musica = new Audio('./musicas/I_Love_You_So.mp3');

const play = document.querySelector("#play-btn")

play.addEventListener('click', () =>{
    musica.play();
})
