(() => {
	// Colecciones
	const fruits = [
		"apple",
		"melon",
		"mango",
		(fruta = "uva") => `Zumo de ${fruta}`,
	];
	const [, , , fn1] = fruits;
	// const jugo = typeof fn1 === 'string' ? 'naranja' : fn1('manzana')
	const jugo = (fn: Function) => fn("naranja");
	console.log("Coleccion array: ", jugo(fn1 as Function));
	// console.log('Coleccion array: ', jugo);

	//Set (es una coleccion que no permite duplicidad de valor)
	const numbersCollection = new Set();
	numbersCollection.add(5);
	numbersCollection.add(5);
	numbersCollection.add(6);

	console.log("Coleccion set: ", numbersCollection);
	// const unicos = [ ...new Set([1, 1, 2, 2, 2, 3])] // (3) [1, 2, 3]

	//Map (es un diccionario con un key y value)
	const students = new Map();
	students.set("one", "Josue");
	students.set("two", "Alex");
	students.set("Three", "Lucy");

	console.log("Coleccion map: ", students.get("one"));

	console.log("------*** PROMESAS **------");
	console.log("INICIO PROMESAS");
	const promesaInicial = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("Error en carga de valores");
		}, 1000);
		setTimeout(() => {
			resolve("Se obtuvieron los valores esperados");
		}, 2000);
	});

	promesaInicial
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.warn("[Exception]", err));
	console.log("FIN PROMESAS");
})();
