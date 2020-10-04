// Json que trae información - Simulando tambien una API

equipos = [
  {
    id: 1,
    nombre: "dixlecia",
  },
  {
    id: 2,
    nombre: "Grupo 5",
  },
  {
    id: 3,
    nombre: "Grupo 4",
  },
  {
    id: 4,
    nombre: "iPref",
  },
  {
    id: 5,
    nombre: "Hancraft",
  },
  {
    id: 6,
    nombre: "Autobots",
  },
  {
    id: 7,
    nombre: "Slow",
  },
];

// Simulando que el JSON o la API no traen resultados
const equipos = [];

// Prueba 1 - Resultado Undefined de un Callback

const obtenerEquipos = () => {
  setTimeout(() => {
    return equipos;
  }, 2000); // no hay nada que pase mientras espera y las promesas arreglan este problema
};

alert(obtenerEquipos());

// prueba 2
// las promesas nos asegunran de devolver algomientras pasa ese tiempo de asincronia
// siempre tiene dos funciones o dos tareas resolver o rechazar

const obtenerEquipos = () => {
  return new Promise((resolve, reject) => {
    if (equipos.length == 0) {
      reject(new Error("no hay equipos"));
    } else {
      setTimeout(() => {
        resolve(equipos); // si se resuelve obviamente se muestran los datos
      }, 2000);
    }
  });
};

//callback asincrono

obtenerEquipos()
  .then((equipos) => console.log(equipos))
  .catch((error) => console.log(error));

// Prueba 3 - Otra manera mas descriptiva

async function funcionConAwait() {
  try {
    const equiposFetch = await obtenerEquipos();
    console.log(equiposFetch);
  } catch (error) {
    console.log(error);
  }
}
funcionConAwait();
