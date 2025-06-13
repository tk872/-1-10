const numberButtonsDiv = document.querySelector('.number-buttons');
const instructionDiv = document.querySelector('.instruction');
const numbers = [
    { number: 1, lao: 'ໜຶ່ງ' },
    { number: 2, lao: 'ສອງ' },
    { number: 3, lao: 'ສາມ' },
    { number: 4, lao: 'ສີ່' },
    { number: 5, lao: 'ຫ້າ' },
    { number: 6, lao: 'ຫົກ' },
    { number: 7, lao: 'ເຈັດ' },
    { number: 8, lao: 'ແປດ' },
    { number: 9, lao: 'ເກົ້າ' },
    { number: 10, lao: 'ສິບ' }
];

numbers.forEach(item => {
    const button = document.createElement('button');
    button.textContent = item.number;
    button.addEventListener('click', () => {
        speakLao(item.lao);
    });
    numberButtonsDiv.appendChild(button);
});

function speakLao(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'lo'; // ລະບຸພາສາລາວ
    speechSynthesis.speak(utterance);
}

// ກວດສອບວ່າ Browser ສະຫນັບສະຫນູນ Speech Synthesis API
if (!('speechSynthesis' in window)) {
    instructionDiv.textContent = 'ຕົວທ່ອງເວັບຂອງທ່ານບໍ່ຮອງຮັບການອອກສຽງ.';
}
