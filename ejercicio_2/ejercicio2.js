const traslados = [
    { id: 1, paciente: 'Ana Rodríguez',   destino: 'CTI',         estado: 'completado' },
    { id: 2, paciente: 'Luis Fernández',  destino: 'Emergencias', estado: 'pendiente'  },
    { id: 3, paciente: 'Marta González',  destino: 'Imagenología', estado: 'en curso'  },
    { id: 4, paciente: 'Pedro Suárez',    destino: 'CTI',         estado: 'pendiente'  },
    { id: 5, paciente: 'Carmen López',    destino: 'Cirugía',     estado: 'completado' },
  ];

traslados.forEach(traslado => {
    if(traslado.estado === 'pendiente'){
        console.log('Traslado #' + traslado.id + ' - ' + traslado.paciente)
    }
}
)