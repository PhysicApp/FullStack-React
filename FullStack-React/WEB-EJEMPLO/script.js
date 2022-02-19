
let name = "juanito";

//arreglos
let persona = []

persona.push(25, 54, 56, 67, 55)

console.log(name)

let name2 = name.toUpperCase()

console.log(name2);

console.log(persona[0]);

//objetos
const per = {
    name: 'juanito',
    age: 21,
    email: ['jose@gmail.com', 'josesosa65@gmail.com']
}

console.log(per.email[1])

//funcion de suma

const sumar = (n1, n2) => {
    console.log(n1),
    console.log(n2)
    return n1 * n2
}

const p1 = 8

console.log(sumar(p1,6))

//declarar funcion

function restar(a, b) {
    return a-b
}

console.log(restar(20,3))

