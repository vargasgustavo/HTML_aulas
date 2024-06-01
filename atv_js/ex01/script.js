function verificarAprovacao() {
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const media = (nota1 + nota2) / 2;
    const resultado = document.getElementById('resultado');

    if (media >= 6) {
        resultado.textContent = 'Aprovado';
        resultado.className = 'aprovado';
    } else {
        resultado.textContent = 'Reprovado';
        resultado.className = 'reprovado';
    }
}
