// Ejercicio 1
((nombre = "User") => {
    // Let permite declarar una variable y poder reasignarle otro valor
    let mensaje = "Mi nombre es";
    // Const permite declarar variables constantes y no permite asignarle otro valor
    const fechaActual = new Date();

    // Modificación de la variable declarado con Let
    mensaje = `${mensaje} ${nombre}`;

    console.log(`Mensaje: ${nombre}, Fecha: ${fechaActual}`)
})();

// Ejercicio 2
(() => {
    // Creación de interface "casa"
    interface casa {
        area: number,
        ambientes: number,
        colorParedes: string,
    }

    // Creación de variable siguiendo la estructura de la interface "casa"
    const casaUsuario: casa = {
      area: 120,
      ambientes: 5,
      colorParedes: "Azul",
    }

    console.log(casaUsuario);
})();

// Ejercicio 3
(() => {
    // Función flecha
    const caluloSumaCuadadro = (x: number, y: number) => `El resultado es ${(x + y)^2}.`;

    console.log(caluloSumaCuadadro(43,25))
})();

// Ejercicio 4
(() => {
    // Parámetros obligatios, con valores por defecto y opcionales
    const obtenerInfo = (nombre: string, edad: number, esPeruano = true, apellido?: string) => {
        const apellidoText = apellido ? " " + apellido + " " : " ";
        const esPeruanoText = esPeruano ? "con" : "sin";

        console.log(`El nombre del usuario es ${nombre}${apellidoText}con edad de ${edad} y ${esPeruanoText} nacionalidad peruana.`)
    }

    obtenerInfo("User", 27, true, "Test");
})();

// Ejercicio 5
(() => {
    // Parametros por defecto a usar
    const nombre = "User";
    const edad = 32;
    const variableA = 3;
    const variableB = 1;
    const esGamer = true;

    // Funciones a usar
    const sumar = (a: number, b: number) => a + b;
    const obtenerTextoGamer = (esGamer: boolean) => esGamer ? "me gusta" : "no me gusta";

    // Ejemplo de template literal usando string y number
    const ejemploA = `Mi nombre es ${nombre} y tengo ${edad} años.`;

    // Ejemplo de template literal usando función flecha
    const ejemploB = `Al sumar ${variableA} y ${variableB} nos da ${sumar(variableA, variableB)}.`;

    // Ejemplo de template literal usando string y boolean para un texto dinamico
    const ejemploC = `Hola, soy ${nombre} y ${obtenerTextoGamer(esGamer)} jugar videojuegos.`;

    console.log(ejemploA);
    console.log(ejemploB);
    console.log(ejemploC);
})();

// Ejercicio 6
(() => {
    // clase Rectangulo
    class Rectangulo {
        private base: number;
        private altura: number;

        constructor(base: number, altura: number) {
            this.base = base;
            this.altura = altura;
        }

        calculate() {
            return this.base * this.altura;
        }
    }

    // Instancia de la clase rectangulo
    const rectanguloRojo = new Rectangulo(32, 12);

    console.log(rectanguloRojo.calculate())
})();

// Ejercicio 7
(() => {
    // Destructuración de objetos usando interfaces fusionados
    interface user {
        usuario: string;
        clave: string;
    }

    interface user {
        fecha: Date;
        estado: boolean;
    }

    const userEjemplo: user = {
        usuario: "user12",
        clave: "pass123",
        fecha: new Date(),
        estado: true,
    }

    const { usuario, clave } = userEjemplo;

    console.log(`Usuario ${usuario}, clave: ${clave}`)

    // Destructuración de objetos usando types
    type product = {
        nombre: string;
        precio: number;
    }

    const productEjemplo: product = {
        nombre: "Laptop",
        precio: 120,
    }

    const { nombre } = productEjemplo;

    console.log(`Producto ${nombre}`)

    // Destructuración de arrays usando una función flecha
    const obtenerNombre = (names = ["Jhon", "Luis", "Mateo", "Ana"]) => {
        const [nombreA, nombreB, ...rest] = names;

        return rest
    }

    console.log(obtenerNombre())
})();