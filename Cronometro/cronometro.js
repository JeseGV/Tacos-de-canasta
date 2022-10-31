//varibles

function stopwatch(){
    let duration = 0;
    let startTime =0;
    let flagTimer =true;

    //Start
    this.start = function() {
        if(flagTimer){
            throw new Error("El cronometro ya ha iniciado...");
        }
        startTime = new Date().getTime;
        flagTimer = true;
    }

    //stop
    this.stop =function(){
        if(!flagTimer){
            throw new Error("El cronometro no estba iniciado...")   
        }
        flagTimer = false;
        duration = (new Date().getTime() - startTime/1000);
    }

    //restart
    this.restart = function(){
        duration = 0;
    }
    //Object.defineProperty(this, 'duration', (get: Function() {return duration}))
}
/*
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
}*/