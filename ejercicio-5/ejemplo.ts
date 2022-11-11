// ----------------------------
(() => {
	let mensaje = "Hola";
	let numero = 123;
	let booleano: boolean = true; // false
	let hoy: Date = new Date();

	let cualquiercosa;
	cualquiercosa = mensaje;
	cualquiercosa = numero;
	cualquiercosa = booleano;
	cualquiercosa = hoy;

	interface heroe {
		nombre: string;
		poder: string;
		fechaMuerte?: string;
		estado?: string;
	}

	const ironman: heroe = {
		nombre: "Tony",
		poder: "Filantropo",
		fechaMuerte: "03/05/2021",
	};

	ironman.fechaMuerte = "03/05/2022";

	console.log(ironman);

	const avengerOriginal = {
		nombres: "Steve",
		clave: "Capitán América",
		poder: "Suero del supersoldado",
	};

	let avengerTemporal = { ...avengerOriginal };
	// let avengerTemporal = avengerOriginal;

	const { nombres } = avengerOriginal;

	console.log("Desestructuracion objecto:", nombres);

	const avengers = ["Thor", "Ironman", "Spiderman"];

	const [, item2] = avengers;

	// Quiero solo obtner ironman (la 2da posición del array)
	console.log("Desestructuracion array:", item2);
	console.log(`${item2}`);
})();
