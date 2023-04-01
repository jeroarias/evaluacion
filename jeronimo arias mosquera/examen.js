let nombre =prompt("ingrse su nombre");
let email = prompt("ingrese su email");
let nit = prompt ("ingrese su nit");
//esta variable no la usa
let usuario = nombre+email+nit
//aca cualquier nit le va a ser valido ojo
 if (nit) {
    console.log("esta bien",nit.length<="12".includes("12"));
   }else{
    //esta bien y mal ? ojo
    console.log("esta bien","su nit esta malo")
   }
//aca cualquier email le va a servir ojo!
if (email) {
    //aca mostraria un true en case de tener @, no es lo que se pide
    //que muestre
    console.log(email.includes("@"));
    } else{console.log("su email esta malo")
}
if (nombre) {
  //el nombre no es criterio para saber si el nit esta bien
    console.log("su nit esta bien".includes("pedro"));
}else{ console.log("su nombre contiene pedro")
}

nota: 0.9

 