function resolve(p){

    if (p == 1) {
        document.write("Medalla de ouro");
    } else if (p == 2){
        document.write("Medalla de plata");
    }else if (p == 3){
        document.write("Medalla de bronce");
    }else {
        document.write("sigue entrenando");
    }
}
var posicion = prompt("en que posicion quedaste?")
resolve(posicion)