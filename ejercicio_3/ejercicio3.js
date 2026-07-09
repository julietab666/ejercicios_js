// Función A
function calcularEdad(anioNacimiento) {
    return 2026 - anioNacimiento;
  }

const calcularEdad = (anioNacimiento) => 2026 - anioNacimiento;
   
// Función B
function describirTraslado(t) {
    const texto = 'Paciente: ' + t.paciente;
    const destino = ' → Destino: ' + t.destino;
    return texto + destino;
  }

const describirTraslado = t => `${t.paciente} ${t.destino}`;
   
  // Función C
  function crearRegistro(id, paciente) {
    return { id: id, paciente: paciente, fecha: new Date() };
  }

const crearRegistro = (id, paciente) => ({id: id, paciente: paciente, fecha: new Date()});
   
  // Función D, no puede ser implicito ya que 
  function esMayorDeEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }

const esMayorDeEdad = (edad) => edad >= 18 ? true : false;