
const allButtons = document.querySelectorAll('.btn');

const textDisplay = document.getElementById('text');

let sentence = [];

allButtons.forEach(read => {
    read.addEventListener('click', (e) => {
        sentence = e.target.value + ' ';
        textDisplay.append(sentence);
    });
});


let speech = new SpeechSynthesisUtterance();

let voices = [];

let selectVoice = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selectVoice.options[i] = new Option(voice.name, i)));
};

selectVoice.addEventListener('change', () => {
    speech.voice = voices[selectVoice.value]
})

document.querySelector('.play-btn').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})


const clear = document.querySelector('.clear-btn')

clear.addEventListener('click', () => {
    document.querySelector('textarea').textContent = ''
})



