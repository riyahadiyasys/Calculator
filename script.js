function appendToDisplay(value) {
    document.getElementById('display').innerHTML += value;
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = result;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}