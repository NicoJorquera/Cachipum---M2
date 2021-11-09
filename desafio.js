var i = true;
while(i){
    var pregunta = parseInt (prompt("¿Quieres jugar? 1: Si, 2: No"));
    switch (pregunta){
        case 1:
        var ciclo = prompt("Cuantas veces quieres jugar?");
        cachipun (ciclo);
        break;

        case 2:
        i = false;
        alert("Gracias por jugar");
        break;

        default:
        alert("Opcion no valida");
        i = false;

          
    }
}

function cachipun (ciclo){
    for (let i=1; i<=ciclo; i++){
        var eleccion = prompt(" 0: Papel \n 1: Piedra \n 2: Tijera");
        var cachi = respuesta (eleccion);
        alert(cachi);
    }
}

function respuesta (eleccion){
   var jugada = Math.floor(Math.random()*3);
   var resultado;
   if (eleccion == jugada){
    resultado = "Empate";
   } 
   if (eleccion == 0 && jugada == 1){
    resultado = "Ganaste";
   } else if (eleccion == 0 && jugada == 2){
    resultado = "Perdiste";
   }
   if (eleccion == 1 && jugada == 0){
       resultado = "Perdiste";
   } else if (eleccion == 1 && jugada == 2){
       resultado = "Ganaste";
   }
   if (eleccion == 2 && jugada ==0){
       resultado = "Ganaste";
   } else if (eleccion == 2 && jugada == 1){
       resultado = "Perdiste";
   }
   
   return resultado;
   
}