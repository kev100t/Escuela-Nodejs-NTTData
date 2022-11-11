(() => {
	const obtenerTorta = (estaEnferma: boolean) => {
		return new Promise((resolve, reject) => {
			if (estaEnferma) {
				reject("No tendremos torta en la fiesta ya que Kayo está enferma");
			}

			resolve("Kayo hará las tortas para la fiesta");
		});
	};

	obtenerTorta(true)
		.then((res) => console.log(res))
		.catch((error) => console.log(error))
		.finally();
})();

(() => {
	interface resultadoAleatorio {
		puntos: number;
		aleatorio: number;
	}

	const ingresaNumero = (ingreso?: number) => {
		return new Promise<resultadoAleatorio>((resolve, reject) => {
			const numNuevo = Number(ingreso);

			const numAlertario = Math.floor(Math.random() * 5 + 1);

			if (isNaN(numNuevo)) {
				reject(new Error("Tipo de entrada incorrecta"));
			}
			let respuesta: resultadoAleatorio;
			if (numNuevo === numAlertario) {
				respuesta = {
					puntos: 5,
					aleatorio: numAlertario,
				};
			} else if (
				numNuevo === numAlertario - 1 ||
				numNuevo === numAlertario + 1
			) {
				respuesta = {
					puntos: 2,
					aleatorio: numAlertario,
				};
			} else {
				respuesta = {
					puntos: 0,
					aleatorio: numAlertario,
				};
			}
			resolve(respuesta);
		});
	};

	const continuarAdivanza = (terminar = true) => {
		return new Promise<boolean>((resolve) => {
			if (terminar) {
				resolve(false);
			}
			setTimeout(() => {
				resolve(true);
			}, 2000);
		});
	};

	const interfaceUsuario = async (status?: boolean) => {
		try {
			const resultado = await ingresaNumero(3);
			const { puntos, aleatorio } = resultado;

			console.log(
				`El resultado del numero aleatorio es: ${aleatorio} y obtuviste ${puntos}pts`
			);

			const continuar = await continuarAdivanza(status);

			if (continuar) {
				interfaceUsuario(continuar);
			} else {
				console.log("Fin del juego");
			}
		} catch (error) {
			console.error(error);
		}
	};

	interfaceUsuario(false);
})();
