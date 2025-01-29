// Função que soma dois números
function soma(num1, num2) {
    return num1 + num2;
}

// Função que exibe o resultado usando o alert
function exibir(resultado) {
    alert("O total da soma é: " + resultado);
}

// Função principal que interliga as duas funções
function iniciar() {
    // Solicita ao usuário para inserir dois números
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    
    // Chama a função soma e passa os números como parâmetros
    let resultado = soma(numero1, numero2);
    
    // Chama a função exibir e passa o resultado da soma
    exibir(resultado);
}

// Inicia a execução do código
iniciar();


