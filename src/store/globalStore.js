import { createStore } from "vuex";

export default createStore({
	state: {
		productos: [],
		carro: { void: "void" },
		productos_carro: 0,
		marcas: [],
		mostrar_carrito_detalle: false,
	},
	mutations: {
		setProducto(state, payload) {
			state.productos = payload;
		},
		setProducto2(state, payload) {
			state.productos = payload;
		},
		setMarca(state, payload) {
			state.marcas = payload;
		},
		setCarro(state, payload) {
			state.carro[payload.id_producto] = payload;
			state.productos_carro++;
			delete state.carro.void;
			console.log(state.carro);
		},
		setCantidadProductosCarro(state, payload) {
			if (state.carro[payload.id_producto].cantidad_producto > 1) {
				state.carro[payload.id_producto].cantidad_producto = state.carro[payload.id_producto].cantidad_producto - 1;
			} else {
				delete state.carro[payload.id_producto];
			}
			state.productos_carro--;
		},
		setMostrar_carrito_detalle(state) {
			state.mostrar_carrito_detalle = !state.mostrar_carrito_detalle;
		},
	},
	actions: {
		async getProductos({ commit }) {
			try {
				const res = await fetch("https://localhost:44372/api/v1/productos");
				const data = await res.json();
				commit("setProducto", data);
			} catch (error) {
				console.log(error);
			}
		},
		async getProductosById({ commit }, productos_por_marca) {
			const nuevo_arreglo = await productos_por_marca;
			commit("setProducto2", nuevo_arreglo);
		},
		async getMarcas({ commit }) {
			try {
				const res = await fetch("https://localhost:44372/api/v1/marcas");
				const data = await res.json();
				commit("setMarca", data);
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

		cambiarProductoCarro({ commit }, producto) {
			commit("setCantidadProductosCarro", producto);
		},
		cambiarEstadoCarritoDetalle({ commit }) {
			commit("setMostrar_carrito_detalle");
		},
	},
	getters: {
		precio_total(state) {
			return Object.values(state.carro).reduce((acc, item) => acc + item.cantidad_producto * item.precio_producto, 0);
		},
	},
});
