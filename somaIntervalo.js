function somaIntervalo(inicio, fim) {
    if (inicio > fim) {
        return "O valor de início deve ser menor ou igual ao valor de fim.";
    }

    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }
    return soma;
}
console.log(somaIntervalo(1, 5));