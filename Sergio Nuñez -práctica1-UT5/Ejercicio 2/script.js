/*Usar rest*/
function verAsignaturas(...arrayAlumnos) {
    if (arrayAlumnos.length != 0) {
        arrayAlumnos.forEach(alumno => {
            let [nombre, curso, ...asignaturas] = alumno;
            
            console.log(`${nombre}-${curso}-asignaturas:${asignaturas.join('/')}`);
        });
    }else
        console.log("No hay datos para mostrar");
    
    
}
verAsignaturas(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"]);
verAsignaturas(["Álvaro","Semi","BBDD"]);
verAsignaturas();