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

const nombres = () => {
  setTimeout(function () {
    alert("tu nombre es Pepe");
  }, 2000);
};

const apellidos = () => {
  alert("tu apellido es Perez");
};

nombres();
apellidos();

//Prueba 3 - Usando Callback

const nombres = (fn) => {
  setTimeout(function () {
    alert("tu nombre es Pepe");
    fn();
  }, 2000);
};
const apellidos = () => {
  alert("tu apellido es Perez");
};

nombres(apellidos);
