function Ejercicio1(cadena, booleano, arrayNumerico, funcion)
{
    let producto = 1;
	if(typeof cadena === "string" && typeof booleano === "boolean" && typeof arrayNumerico === "object" && typeof funcion === "function")
        if (booleano) {
            for(let i of arrayNumerico)
                producto *= i;
            if (producto > 100) {
                for(let j of cadena)
                    if (j == 'a') {
                        console.log("La 'a' no esta permitida");
                    }else
                        console.log("Muy bien, no has usado la 'a'");
            }else
                console.log(`El resultado de tu array ${producto} es insuficiente para comprobar la cadena`)
        }else
            funcion();
    else
        console.log("No hay parámetros a comprbar o hay algún error");
    
}
Ejercicio1()
Ejercicio1("hola mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",true,[10,20,30,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",false,[10,20,30,40],()=>{alert("Se acabó el juego")})