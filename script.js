const trombaAudio = new Audio('suoni/tromba.mp3');
const tarantellaAudio = new Audio('suoni/tarantella.mp3');
const cities = ["Torino?", "Bolzano?", "Bressanone?", "Milano?", "Firenze?", "Genova?", "Trieste?", "Bergamo?", "Verona?", "Piacenza?", "Novara?"];
let cityIndex = 0;

document.getElementById("citta").innerText = cities[cityIndex];
cityIndex = (cityIndex + 1) % cities.length;

document.getElementById('play-tromba').addEventListener('click', () => {
    stopAudio();
    trombaAudio.play();
    document.getElementById("citta").innerText = cities[cityIndex];
    cityIndex = (cityIndex + 1) % cities.length;
});

document.getElementById('play-tarantella').addEventListener('click', () => {
    stopAudio();
    tarantellaAudio.play();
    document.getElementById("citta").innerText = "E VAIIIIIIIII AMICO MIO";
});

document.getElementById('stop-audio').addEventListener('click', stopAudio);

function stopAudio() {
    trombaAudio.pause();
    tarantellaAudio.pause();
    trombaAudio.currentTime = 0;
    tarantellaAudio.currentTime = 0;
    document.getElementById("citta").innerText = "";
}
