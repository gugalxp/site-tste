let correctWord = 'BANANA';
let shuffledLetters = correctWord.split('').sort(() => 0.5 - Math.random());
let selectedLetters = [];
let score = 0;

function showActivity(letter) {
    // Ocultar todas as atividades
    document.querySelectorAll('.activity').forEach(function(activity) {
        activity.style.display = 'none';
    });

    // Mostrar a atividade selecionada
    document.getElementById('activity-' + letter).style.display = 'flex';
    // Ocultar a caixinha com as letras
    document.getElementById('alphabet-box').style.display = 'none';
    if (letter === 'B') {
        startActivityB();
    }
}

function startActivityB() {
    const container = document.getElementById('letters-container');
    container.innerHTML = '';
    shuffledLetters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        span.onclick = () => selectLetter(letter, span);
        container.appendChild(span);
    });
    selectedLetters = [];
    document.getElementById('result-B').textContent = '';
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}

function selectLetter(letter, element) {
    selectedLetters.push(letter);
    element.style.visibility = 'hidden';
    if (selectedLetters.join('') === correctWord) {
        document.getElementById('result-B').textContent = 'Parabéns! Você formou a palavra correta!';
        document.getElementById('result-B').style.color = 'green';
        score++;
        document.getElementById('score').textContent = `Pontuação: ${score}`;
    } else if (selectedLetters.length === correctWord.length) {
        document.getElementById('result-B').textContent = 'Ops! A palavra está incorreta. Tente novamente!';
        document.getElementById('result-B').style.color = 'red';
    }
}

function resetActivity() {
    selectedLetters = [];
    shuffledLetters = correctWord.split('').sort(() => 0.5 - Math.random());
    startActivityB();
}

function showAlphabet() {
    // Mostrar a caixinha com as letras
    document.getElementById('alphabet-box').style.display = 'grid';
    // Ocultar todas as atividades
    document.querySelectorAll('.activity').forEach(function(activity) {
        activity.style.display = 'none';
    });
}
