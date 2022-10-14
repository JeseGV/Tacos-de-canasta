//varibles
let inicio, final,r;

//Funcion de inico
function start() {
    if(inicio!==0){
        throw new Error("Ya iniciado con anterioridad");
    }
inicio = new Date().getTime;
console.log("inciando...")
}

//funcion de finalizado
function stop() {
    if(inicio==0){
        throw new Error("No iniciado");
    }
    final = new Date().getTime;
    r = parseFloat(final) - parseFloat(inicio);
    r = r/1000
    console.log("El tiempo fue: "+r);
}

function restart() {
inicio = 0;
final = 0;
r = 0;
console.log("00:00");
}