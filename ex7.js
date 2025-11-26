let frase = "A arara azul voa baixo";
let cont =0;

frase = frase.toLowerCase();

for (let i = 0; i < frase.length; i++) {
    if(frase[i] === "a") {
        cont =cont +1;
    }
}

console.log(cont);
