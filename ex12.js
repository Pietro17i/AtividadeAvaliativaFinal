let notas = [9, 8, 6, 10];

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    let conceito = "";

    if (nota >= 9) {
        conceito = "A";
    } else if (nota >= 7) {
        conceito = "B";
    } else {
        conceito = "C";
    }

    console.log(nota + " . " + conceito);
}
