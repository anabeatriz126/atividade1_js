let resultado = 0;

function calcular(operacao, numero1, numero2) {
    switch(operacao) {
        case 'somar':
            return numero1 + numero2;
        case 'subtrair':
            return numero1 - numero2;
        case 'multiplicar':
            return numero1 * numero2;
        case 'dividir':
            if (numero2 === 0) {
                alert('Divisão por zero não é permitida');
                return null;
            }
            return numero1 / numero2;
        default:
            return null;
    }
}

function operacaoHandler(event) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = event.target.getAttribute('data-operacao');

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira números válidos');
        return;
    }

    resultado = calcular(operacao, numero1, numero2);
    if (resultado !== null) {
        document.getElementById('resultado').innerText = resultado;
    }
}

function confirmarResultado() {
    alert('O resultado da operação é: ' + resultado);
}

// Event listeners
document.querySelectorAll('button[data-operacao]').forEach(button => {
    button.addEventListener('click', operacaoHandler);
});

document.getElementById('confirmar-btn').addEventListener('click', confirmarResultado);