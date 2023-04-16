const vuelos = [];

const crearVuelo = document.getElementById('form');

crearVuelo.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = e.target.children;
    const vuelo = {
        titular: data["titular"].value,
        dni: data["dni"].value,
        fechaIda: data["fechaIda"].value,
        fechaVuelta: data["fechaVuelta"].value,
        origen: data["origen"].value,
        destino: data["destino"].value,
        pasajeros: data["pasajeros"].value
    }
    vuelos.push(vuelo);
})

console.log(vuelos);