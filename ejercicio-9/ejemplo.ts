import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("primerEvento", () => {
  console.log("Se ejecuto el primer evento");
});
eventEmitter.prependListener("primerEvento", () =>
  console.log("Anteponiendo Event")
);
//eventEmitter.emit('primerEvento');

eventEmitter.on("segundoEvento", () => {
  console.log("Se ejecuto el segundo evento");
});
eventEmitter.on("segundoEvento", (...args) => {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});
//eventEmitter.emit('segundoEvento', 1, 2, 3);

eventEmitter.on("cargaUsuario", (nombre: string, edad: number) => {
  console.log(`Se cargo los datos del usuario ${nombre} con ${edad} de edad.`);
});
//eventEmitter.emit('cargaUsuario', 'Jonatan', 55);

console.log(eventEmitter.listeners("cargaUsuario"));
