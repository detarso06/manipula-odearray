const notas = [10,9,7,7,8];
console.log(" primeira nota é:",notas[0])
console.log(" última nota é:",notas[4])

console.log(notas.push(5));
console.log(notas);

console.log(notas.shift());
console.log(notas)

console.log(notas.filter((value) => value > 7));

notas.forEach(function(nota, index) {
    console.log(`Nota ${index + 1}:`, nota);
});


let soma = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);
let media = soma / notas.length;
console.log("Média das notas:", media.toFixed(2));


console.log(notas.sort());
console.log(notas)

console.log(notas.includes(6.5));

console.log(notas.indexOf(8));

console.log(notas.map((value) => value ** 2));