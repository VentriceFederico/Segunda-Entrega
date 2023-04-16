/*const vuelos = [];

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
*/

const ORIGEN_1 = "BUENOS AIRES";
const ORIGEN_2 = "ROSARIO";
const DESTINO_1 = "MISIONES";
const DESTINO_2 = "MENDOZA";
const DESTINO_3 = "SANTA CRUZ";
const DESTINO_4 = "SALTA";
const DESTINO_5 = "NEUQUEN";

class vuelo {
    constructor(nombre, dni, origen, destino, estadia, pasajeros, precio) {
        this.nombre = nombre.toUpperCase();
        this.dni = dni;
        this.origen = origen.toUpperCase();
        this.destino = destino.toUpperCase();
        this.estadia = estadia;
        this.pasajeros = pasajeros;
        this.precio = precio;
    }
    vueloPrecio() {
        if (this.origen == ORIGEN_1) {
            switch (this.destino) {
                case DESTINO_1:
                    this.precio = Math.round(30000 * this.pasajeros * (this.estadia * 0.1));
                    break;
                case DESTINO_2:
                    this.precio = Math.round(38000 * this.pasajeros * (this.estadia * 0.1));
                    break;
                case DESTINO_3:
                    this.precio = Math.round(50000 * this.pasajeros * (this.estadia * 0.1));
                    break;
                case DESTINO_4:
                    this.precio = Math.round(53000 * this.pasajeros * (this.estadia * 0.1));
                    break;
                case DESTINO_5:
                    this.precio = Math.round(25000 * this.pasajeros * (this.estadia * 0.1));
                    break;
            }
        }
    }
}

const vuelos = [];

function main() {

    crear();

    crearPrecio();

    //CRUD -> Crear - Ver - Editar - Borrar.

    crud = crudfn();

    switch (crud) {
        case 1: //Crear
            crear();
            break;
        case 2: //Leer
            ver();
            break;
        case 3: //Editar

            break;
        case 4: //Borrar

            break;
        default:
            break;
    }

}

function ver() {
    let opc;

    do {
        opc = parseInt(prompt("Que vuelos quiere ver:\n1-Todos los vuelos\n2-Mas barato al mas caro\n3-De un titular\n4-Por destino\n5-Por origen"));
    } while ((opc <= 0 || opc > 5) || isNaN(opc));

    switch (opc) {
        case 1:     //Ver todos los vuelos.
            for (const vuelo of vuelos) {
                alert("Titular: " + vuelo.nombre + "\nD.N.I: " + vuelo.dni + "\nEstadia: " + vuelo.estadia + "\nCantidad de Pasajeros: " + vuelo.pasajeros + "\nTotal del Viaje: $" + vuelo.precio);
            }
            break;
        case 2:     //mas barato al mas caro
            vuelos.sort((o1, o2) => {
                if (o1.precio > o2.precio) {
                    return 1;
                }
                else if (o1.precio < o2.precio) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            for (const vuelo of vuelos) {
                alert("Titular: " + vuelo.nombre + "\nD.N.I: " + vuelo.dni + "\nEstadia: " + vuelo.estadia + "\nCantidad de Pasajeros: " + vuelo.pasajeros + "\nTotal del Viaje: $" + vuelo.precio);
            }
            break;
        case 3:     //titular
            nombreFn();
            
            break;
        case 4:     //Por destino

            break;
        case 5:     //Por origen

            break;
        default:
            break;
    }
}

function nombreFn() {
    const nombres = vuelos.map((e) => e.nombre);

    do {
        filNombre = prompt("Ingrese un titular.\nTitulares: " + nombres.join(", ")).toUpperCase();
    } while (!nombres.includes(filNombre));

    const filtrado = vuelos.filter(e => e.nombre === filNombre);
    console.log(filtrado);
    alert(filtrado.nombre);
}

function crear() {
    let nombre, dni, estadia, pasajeros, precio = 0;
    do {
        nombre = ingreseNombre();
        dni = ingreseDni();
        origen = ingreseOrigen();
        destino = ingreseDestino();
        estadia = ingreseEstadia();
        pasajeros = ingresePasajeros();

        vuelos.push(new vuelo(nombre, dni, origen, destino, estadia, pasajeros, precio));

    } while (confirm("Quiere seguir agregando Vuelos?"));
}

function crudfn() {
    let crud;
    do {
        crud = parseInt(prompt("Desea:\n1-Crear un nuevo vuelo?\n2-Ver sus vuelos\n3-Ediar vuelo\n4-Borrar un vuelo"));
        if (crud <= 0 || crud > 4) {
            crud = 0;
        }
    } while (crud == 0 || isNaN(crud));
    return crud;
}

function ingreseNombre() {
    let nombre = prompt("Ingrese nombre y apellido del titular de la reserva.");
    return nombre;
}

function ingreseDni() {
    let dni;
    do {
        dni = parseInt(prompt("Ingrese D.N.I del titular."));
    } while ((isNaN(dni)) || dni < 5000000);
    return dni
}

function ingreseOrigen() {
    let origen
    do {
        origen = parseInt(prompt("Ingrese origen.\n1-Buenos Aires\n2-Rosario"));
        if (origen == 1) {
            origen = "Buenos Aires";
            return origen;
        }
        if (origen == 2) {
            origen = "Rosario";
            return origen;
        }
        else {
            origen = 0;
        }
    } while (origen == 0);
}

function ingreseDestino() {
    let destino
    do {
        destino = parseInt(prompt("Ingrese destino:\n1-Misiones\n2-Mendoza\n3-Santa Cruz\n4-Salta\n5-Neuquen"));
        switch (destino) {
            case 1:
                destino = "Misiones";
                return destino;
            case 2:
                destino = "Mendoza";
                return destino;
            case 3:
                destino = "Santa Cruz";
                return destino;
            case 4:
                destino = "Salta";
                return destino;
            case 5:
                destino = "Neuquen";
                return destino;
            default:
                destino = 0;
                break;
        }
    } while (destino == 0);
}

function ingreseEstadia() {
    let estadia;
    do {
        estadia = parseInt(prompt("Ingrese estadia:"));
        if (estadia > 0) {
            return estadia;
        }
    } while (estadia <= 0 || isNaN(estadia));
}

function ingresePasajeros() {
    let pasajeros = prompt("Ingresar la cantidad de pasajeros:");
    return pasajeros;
}

function crearPrecio() {
    for (const vuelo of vuelos) {
        vuelo.vueloPrecio();
        console.log(vuelo.precio);
    }
}


main();
