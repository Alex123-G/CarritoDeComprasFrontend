export const listarProdsById = async id_marca => {
	try {
		const form_data = new FormData();
		form_data.append("id_marca", id_marca);
		const request = await fetch("https://localhost:44372/api/v1/productos", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: form_data,
		});
		const response = await request.json();
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
};
