// Función clásica — punto de partida
const formatearPaciente = (nombre, apellido) => {
    return nombre + ' ' + apellido;
}
   
  // Función clásica 2
  function obtenerIniciales(nombre, apellido) {
    const ini1 = nombre[0].toUpperCase();
    const ini2 = apellido[0].toUpperCase();
    return ini1 + '.' + ini2 + '.';
  }
   
  // Función clásica 3
  function esPacienteActivo(estado) {
    return estado === 'activo';
  }
  