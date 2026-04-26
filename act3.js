// Wite only JS code in activity

function calculateResult() {
    const res = document.getElementById("result");
    const exp = resultElement.value.trim();

    if (exp === '') {
        res.value = 'Enter valid expression';
        return;
    }
    try {
        res.value = eval(exp);
    } catch (e) {
        res.value = 'Invalid';
    }
}

function clearScreen() {
    document.getElementById("result").value = "";
}


function setScreenValue(value) {
    document.getElementById("result").value += value;
}