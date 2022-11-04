(() => {
    const retirarDinero = (montoARetirar: number) => new Promise((resolve, reject) => {
        const montoActual = 1000;

        if (montoARetirar < montoActual) {
            resolve(`Monto disponible a retirar ${montoActual-montoARetirar}`);
        } else {
            reject("Monto a retirar supera al monto actual");
        }
    })

    retirarDinero(300).then((result => console.log(result) ))
    .catch((e) => console.log(e.message))
})();