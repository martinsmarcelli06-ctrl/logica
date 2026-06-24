function calcularArea
(base: number,altura: number): number {
return base * altura;
}
console.log(calcularArea(4,5));


function converteTemperatura 
(temp: number): number {
    return (temp * 9/10) + 32
}
console.log(`temperatura em f°:
   ${converteTemperatura(25)}`);