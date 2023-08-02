const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continueButton');
const backButton = document.getElementById('backButton');
const startPage = document.querySelector('.start-page');
const rulesPage = document.querySelector('.rules-page');
const googleFormContainer = document.querySelector('.google-form-container');

let currentQuiz = 0;
let score = 0;

function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}

startButton.addEventListener('click', () => {
    hideElement(startPage);
    showElement(rulesPage);
});

continueButton.addEventListener('click', () => {
    hideElement(rulesPage);
    showElement(googleFormContainer);
});

backButton.addEventListener('click', () => {
    hideElement(googleFormContainer);
    showElement(rulesPage);
});
