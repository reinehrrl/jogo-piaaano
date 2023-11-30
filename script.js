const teclas = document.querySelectorAll('.tecla');
const checkbox = document.querySelector('.checkboxNotas');
const switcher = document.querySelector('.switcher');
const notasPiano = document.querySelector('.notasPiano')

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (tecla) => {
    playNote(tecla.getAttribute('data-note'));

    if (tecla.className.includes('Preta')) {
        tecla.classList.add('PretaPressionada');
        return;
    }

    tecla.style.background = '#ddd';
}

const handleMouseUp = (tecla) => {

    if (tecla.className.includes('Preta')) {
        tecla.classList.remove('PretaPressionada');
        return;
    }

    tecla.style.background = 'white';

}

teclas.forEach((tecla) => {

    tecla.addEventListener('mousedown', () => handleMouseDown(tecla))
    tecla.addEventListener('mouseup', () => handleMouseUp(tecla))

});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcherActive');
        notasPiano.classList.remove('notasDesabilitadas');
        return;
    }

    switcher.classList.remove('switcherActive');
    notasPiano.classList.add('notasDesabilitadas');
})

const keydownMapper = {
    "Tab": () => handleMouseDown(teclas[0]),
    "Digit1": () => handleMouseDown(teclas[1]),
    "KeyQ": () => handleMouseDown(teclas[2]),
    "Digit2": () => handleMouseDown(teclas[3]),
    "KeyW": () => handleMouseDown(teclas[4]),
    "KeyE": () => handleMouseDown(teclas[5]),
    "Digit4": () => handleMouseDown(teclas[6]),
    "KeyR": () => handleMouseDown(teclas[7]),
    "Digit5": () => handleMouseDown(teclas[8]),
    "KeyT": () => handleMouseDown(teclas[9]),
    "Digit6": () => handleMouseDown(teclas[10]),
    "KeyY": () => handleMouseDown(teclas[11]),
    "KeyU": () => handleMouseDown(teclas[12]),
    "Digit8": () => handleMouseDown(teclas[13]),
    "KeyI": () => handleMouseDown(teclas[14]),
    "Digit9": () => handleMouseDown(teclas[15]),
    "KeyO": () => handleMouseDown(teclas[16]),
    "KeyP": () => handleMouseDown(teclas[17]),
    "Minus": () => handleMouseDown(teclas[18]),
    "BracketLeft": () => handleMouseDown(teclas[19]),
    "Equal": () => handleMouseDown(teclas[20]),
    "BracketRight": () => handleMouseDown(teclas[21]),
    "Backspace": () => handleMouseDown(teclas[22]),
    "Backslash": () => handleMouseDown(teclas[23]),
}

const keyUpMapper = {
    "Tab": () => handleMouseUp(teclas[0]),
    "Digit1": () => handleMouseUp(teclas[1]),
    "KeyQ": () => handleMouseUp(teclas[2]),
    "Digit2": () => handleMouseUp(teclas[3]),
    "KeyW": () => handleMouseUp(teclas[4]),
    "KeyE": () => handleMouseUp(teclas[5]),
    "Digit4": () => handleMouseUp(teclas[6]),
    "KeyR": () => handleMouseUp(teclas[7]),
    "Digit5": () => handleMouseUp(teclas[8]),
    "KeyT": () => handleMouseUp(teclas[9]),
    "Digit6": () => handleMouseUp(teclas[10]),
    "KeyY": () => handleMouseUp(teclas[11]),
    "KeyU": () => handleMouseUp(teclas[12]),
    "Digit8": () => handleMouseUp(teclas[13]),
    "KeyI": () => handleMouseUp(teclas[14]),
    "Digit9": () => handleMouseUp(teclas[15]),
    "KeyO": () => handleMouseUp(teclas[16]),
    "KeyP": () => handleMouseUp(teclas[17]),
    "Minus": () => handleMouseUp(teclas[18]),
    "BracketLeft": () => handleMouseUp(teclas[19]),
    "Equal": () => handleMouseUp(teclas[20]),
    "BracketRight": () => handleMouseUp(teclas[21]),
    "Backspace": () => handleMouseUp(teclas[22]),
    "Backslash": () => handleMouseUp(teclas[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keydownMapper[event.code]();
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.code]();
});

