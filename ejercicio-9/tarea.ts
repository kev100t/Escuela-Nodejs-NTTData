import { EventEmitter } from "events";

(() => {
  const eventEmitter = new EventEmitter();

  eventEmitter.on("ApiRespuesta", (message: string) => {
    console.log(message);
  });

  const obtenerRespuestaApi = (pais: string) => {
    setTimeout(() => {
      eventEmitter.emit("ApiRespuesta", `Se cargo la data: ${pais}`);
    }, 3000);
  };

  obtenerRespuestaApi("Brasil");
})();

(() => {
  const eventEmitter = new EventEmitter();

  eventEmitter.on("ApiRespuesta", (message: string) => {
    console.log(message);
  });

  const obtenerVecinosPais = () => {
    const vecinos = ["Peru", "Ficticio", "Colombia"];

    for (let i = 0; i < vecinos.length; i++) {
      if (i === 1) {
        eventEmitter.emit(
          "ApiRespuesta",
          `No se encontró datos: ${vecinos[i]}`
        );

        return;
      }
    }
  };

  obtenerVecinosPais();
})();
