let alumnos = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
];

let curso = prompt("¿De qué curso son tus alumnos?");
let asignaturas = prompt("¿Qué asignaturas cursan?");

alumnos = alumnos.map(alumno => ({
    nombre: alumno.nombre,
    edad: alumno.edad,
    curso: curso,
    asignaturas: asignaturas
}));

alumnos.forEach(alumno => {
    console.log(`Alumno: ${alumno.nombre} \nEdad: ${alumno.edad} \nCurso: ${alumno.curso} \nAsignaturas: ${alumno.asignaturas}`);
});
