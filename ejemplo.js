console.log('Hola mundo');

let numero1 = 10;
let numero2 = 20;
let resultado = numero1 + numero2;
console.log(resultado);

//logica
let booleano = true;
let booleano2 = false;

console.log(booleano);

let objeto = 
{
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    casado: false,
    hijos: null,    
    mascotas: ['perro', 'gato']
};

console.log(objeto);

console.log(objeto.nombre);

//arreglos - listas

let libros = ['libro1', 'libro2', 'libro3', 'libro4'];

console.log(libros);

console.log(libros[0]);
console.log(libros[3]);

//fecha

let fecha = new Date();
let fecha2 = new Date('2024-09-22');

console.log(fecha);
console.log(fecha2);

//funciones

function sumar(numero1, numero2)
{
    return numero1 + numero2;
}

let resultado2 = sumar(10, 20);

console.log(resultado2);

//condicionales

let edad = 18;

if(edad >= 18)
{
    console.log('Es mayor de edad');
}
else
{
    console.log('Es menor de edad');
}

//ciclos

for(let i = 0; i < 10; i++)
{
    console.log(i);
}

let i = 0;

while(i < 10)
{
    console.log(i);
    i++;
}

//funciones flecha

let sumar2 = (numero1, numero2) => numero1 + numero2;

let resultado3 = sumar2(10, 20);

console.log(resultado3);

//clases

class Persona
{
    constructor(nombre, apellido, edad)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar()
    {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

let persona1 = new Persona('Juan', 'Perez', 30);
let persona2 = new Persona('Maria', 'Lopez', 25);

persona1.saludar();

//promesas

let promesa = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve('La operacion fue exitosa');
    }, 2000);
});

promesa.then((resultado) =>
{
    console.log(resultado);
});



//programacion funcional

function saludo(){
    console.log('Hola mundo');
}

const saludo2 = saludo;

saludo2();

setTimeout(saludo2, 3000);


// funciones de orden superior

function operacion(numero1, numero2, operacion)
{
    return operacion(numero1, numero2);
}

function sumar3(numero1, numero2)
{
    return numero1 + numero2;
}

function restar(numero1, numero2)
{
    return numero1 - numero2;
}

let resultado4 = operacion(10, 20, sumar3);
let resultado5 = operacion(10, 20, restar);

console.log(resultado4);
console.log(resultado5);

// funciones anonimas

let resultado6 = operacion(10, 20, function(numero1, numero2){
    return numero1 * numero2;

}
);

console.log(resultado6);

