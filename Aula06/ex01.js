let numeros = [10, 20, 25, 30, 35];

for (let i = 0; i < numeros.length; i++){
    console.log("Índice" + i + ": " + numeros [i]);

    for (let num of numeros){
        console.log(num);

        numeros.forEach((num, i) => {
           console.log(`posição ${i}: ${num}`);
        })
    }
}

