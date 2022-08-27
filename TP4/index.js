const nombre = "David Ezequiél"
const apellido = "Palazzi"

const estudiante = `Bienvenido ${nombre} ${apellido} a OpenBoocamp`;
console.log(estudiante);

const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

const estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

console.log(estudiante.length);

const nombreInicial = nombre[0];
console.log(nombreInicial);

const apellidoFinal = apellido[apellido.length-1];
console.log(apellidoFinal);

const estudianteSpace = estudiante.replace(" ", "");
console.log (estudianteSpace)

const nombreEnEstudiante = estudiante.includes(`${nombre}`);
console.log(nombreEnEstudiante);



