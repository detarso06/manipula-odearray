const notas = [10,9,7,7,8];
console.log(" primeira nota é:",notas[0])
console.log(" última nota é:",notas[4])

console.log(notas.push(5));
console.log(notas);

console.log(notas.shift());
console.log(notas)

console.log(notas.filter((value) => value > 7));

console.log(notas.sort());
console.log(notas)

console.log(notas.includes(6.5));

console.log(notas.indexOf(8));

console.log(notas.map((value) => value ** 2));