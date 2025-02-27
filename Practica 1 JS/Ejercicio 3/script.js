function verAsignaturas(arrayABuscar, arrayReferencia) {
    let contador = 0;
    if (arrayABuscar != undefined && arrayReferencia != undefined) {
        arrayABuscar.forEach(nombre => {
            if (arrayReferencia.includes(nombre)) {
                contador += 1;
            }
        });
        if (contador == 0) {
            console.log("No hay ninguno incluido");
        }else if (contador > 0  && contador < arrayABuscar.length) {
            console.log("Hay alguno incluido");
        }else
        {
            console.log("Todos estan incluidos");
        }
    } else {
        console.log("No hay datos para mostrar");
    }
    

    
}
verAsignaturas(["Sara", "Pedro", "Mario"],["Martín", "Sara", "Pedro", "Mario", "Jose"]);
verAsignaturas(["Sara", "Pedro", "Mario"],["Martín", "Sonia", "Miguel", "Susana", "Jose"]);
verAsignaturas(["Sara", "Pedro", "Mario"],["Sara", "Sonia", "Miguel", "Susana", "Jose"]);
verAsignaturas();
