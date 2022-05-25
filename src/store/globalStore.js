import { createStore } from "vuex";

export default createStore({
	state: {
		productos: [],
		carro: { void: "void" },
		productos_carro: 0,
		mostrar_carrito_detalle: false,
	},
	mutations: {
		setProducto(state, payload) {
			state.productos = payload;
		},
		setCarro(state, payload) {
			state.carro[payload.id_producto] = payload;
			state.productos_carro++;
			delete state.carro.void;
		},
		setMostrar_carrito_detalle(state) {
			state.mostrar_carrito_detalle = !state.mostrar_carrito_detalle;
		},
	},
	actions: {
		async fetchData({ commit }) {
			try {
				const res = await fetch("https://localhost:44372/api/v1/productos");
				const data = await res.json();
				commit("setProducto", data);
			} catch (error) {
				console.log(error);
			}
		},

		agregarProductoCarro({ commit, state }, producto) {
			Object.prototype.hasOwnProperty.call(state.carro, producto.id_producto)
				? (producto.cantidad_producto = state.carro[producto.id_producto].cantidad_producto + 1)
				: (producto.cantidad_producto = 1);
			commit("setCarro", producto);
		},
		cambiarEstadoCarritoDetalle({ commit }) {
			commit("setMostrar_carrito_detalle");
		},
	},
});
