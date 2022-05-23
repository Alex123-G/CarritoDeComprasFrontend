import { createStore } from "vuex";

export default createStore({
	// Los state son propiedades que se pueden utilizar en toda nuestra aplicacion, es como un estado global en React con redux
	state: {
		productos: [],
		carro: {},
		productos_carro: 0,
		mostrar_carrito_detalle: true,
	},
	// Mutacion Solo sirve para modificar los state
	mutations: {
		// state hace referencia al objeto state que esta declarado arriba, y el payload es el nuevo valor que vamos a colocarle al state y de esa forma cambia el valor del state
		setProducto(state, payload) {
			state.productos = payload;
		},
		// mutacion para agrgar los productos al carro
		setCarro(state, payload) {
			state.carro[payload.id_producto] = payload;
			state.productos_carro++;
			// console.log(state.carro);
		},
		setMostrar_carrito_detalle(state) {
			state.mostrar_carrito_detalle = !state.mostrar_carrito_detalle;
			console.log(state.mostrar_carrito_detalle);
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
		agregarProductoCarro({ commit, state }, producto) {
			// "hasOwnProperty"  es un metodo el cual nos permite saber si el objeto que esta en el primer parametro "state.carro" tiene la propiead del segundo argumento "producto.id_producto" y esto nos devuelve un booleano ,si lo tiene es true sino nos da false. => state.carro.hasOwnProperty(producto.id_producto) esto funciona igual PERO por una regloa del esint NO NOS PERMITE ESCRIBIRLO asi , ya que no es una buena practica
			Object.prototype.hasOwnProperty.call(state.carro, producto.id_producto)
				? (producto.cantidad = state.carro[producto.id_producto].cantidad + 1)
				: (producto.cantidad = 1);
			commit("setCarro", producto);
		},
		cambiarEstadoCarritoDetalle({ commit }) {
			commit("setMostrar_carrito_detalle");
		},
	},
});
