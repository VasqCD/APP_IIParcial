console.log("Pimer tarea");
console.log("Segunda tarea");
console.log("Tercer tarea");


setTimeout(() => {
    console.log("Cuarta tarea");
}, 2000);

// promesas

const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Quinta tarea');
    }, 2000);
});

promesa.then((mensaje)=>{
    console.log(mensaje);
    console.log("Sexta tarea");
})

console.log("Septima tarea");

function retraso(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function prueba(){
    console.log("Se muestras despues de finalizar la tarea.. fin")
}

async function funcionAsincrona(){
    console.log("Octava tarea");
    await retraso(2000);
    console.log("la tarea finalizo");
    await retraso(2000);
    prueba();
}

funcionAsincrona();