// Prueba 1 - Funcionalidad normal

const nombres = () => {
  alert("tu nombre es pepe");
};
const apellidos = () => {
  alert("tu apellido es perez");
};

nombres();
apellidos();

//Prueba 2 - Usando setTime out y recibiendo un Undefined

const nombres2 = () => {
  setTimeout(function () {
    alert("tu nombre es Pepe");
  }, 2000);
};

const apellidos2 = () => {
  alert("tu apellido es Perez");
};

nombres();
apellidos();

//Prueba 3 - Usando Callback

const nombres3 = (fn) => {
  setTimeout(function () {
    alert("tu nombre es Pepe");
    fn();
  }, 2000);
};
const apellidos3 = () => {
  alert("tu apellido es Perez");
};

nombres(apellidos);
