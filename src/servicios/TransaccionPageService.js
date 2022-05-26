export const crear_Transaccion = async productos => {
	try {
		const JsonProductos = JSON.stringify(productos);
		const request = await fetch("https://localhost:44372/api/v1/pedidos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JsonProductos,
		});
		const response = await request.json();
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
