function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);

    let classificacao;
    let grauObesidade;

    if (imc < 18.5) {
        classificacao = 'Magreza';
        grauObesidade = '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Normal';
        grauObesidade = '0';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        grauObesidade = 'I';
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade';
        grauObesidade = 'II';
    } else {
        classificacao = 'Obesidade Grave';
        grauObesidade = 'III';
    }

    document.getElementById('resultado').textContent = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao}, Obesidade Grau ${grauObesidade})`;
}
