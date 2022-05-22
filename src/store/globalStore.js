import { createStore } from "vuex";

export default createStore({
	// Los state son propiedades que se pueden utilizar en toda nuestra aplicacion, es como un estado global en React con redux
	state: {
		productos: [],
		carro: {},
	},
	// Mutacion Solo sirve para modificar los state
	mutations: {
		// state hace referencia al objeto state que esta declarado arriba, y el payload es el nuevo valor que vamos a colocarle al state y de esa forma cambia el valor del state
		setProducto(state, payload) {
			state.productos = payload;
			// console.log(state.productos);
		},
		// mutacion para agrgar los productos al carro
		setCarro(state, payload) {
			state.carro[payload.id_producto] = payload;
		},
	},
	actions: {
		// En este metodo se va a ser la peticion fetch par obtener los productos a listar
		async fetchData({ commit }) {
			try {
				const res = await fetch("https://localhost:44372/api/v1/productos");
				const data = await res.json();
				// Con el commit llamamos a las mutations y la mutacion setProducto se encarga de cambiar el valor de productos,este data va ser el nuevo valor del array de productos
				commit("setProducto", data);
			} catch (error) {
				console.log(error);
			}
		},
		// Accion para agregar productos al carro de compras
		agregarProductoCarro({ commit, state }, producto) {
			// "hasOwnProperty" validacion para saber si existe o no , nos devuelve un valor true o false,(LO QUE ESTA EN LA PAGINA NO SIRVE PORUE SOLO LO PERMITE EJEUCTAR UNA VEZ Y NO AUMENTA LA CANTIDAD) DEBIDO AL ESINT TIENE UN WARNIGN  POR ESO TENEMOS QUE LLAMARL A CALL PARA QUE SE QUITE EL ERROR LINK PAGINA "que est en marcadores"

			Object.prototype.hasOwnProperty.call(state.carro, producto.id_producto)
				? (producto.cantidad = state.carro[producto.id_producto].cantidad + 1)
				: (producto.cantidad = 1);
			commit("setCarro", producto);
		},
	},
});
