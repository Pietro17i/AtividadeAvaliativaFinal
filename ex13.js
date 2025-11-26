let numeros = [5, 8, 11, 4, 3];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        soma = soma + numeros[i];
    }
}

console.log(soma);
