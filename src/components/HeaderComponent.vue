<template>
	<header class="header">
		<div class="titulo">
			<router-link to="/" class="link"><h1>FastBuy</h1></router-link>
		</div>
		<div class="perfil">
			<div class="carro-container">
				<img v-bind:src="require('../imgs/icons/Untitled.svg')" alt="carrito" class="carro-container-imagen" @click="cambiarEstadoCarritoDetalle()" />
				<span v-if="productos_carro <= 0"></span>
				<span v-else-if="productos_carro > 9" class="productos-carro">+9</span>
				<span v-else class="productos-carro">{{ productos_carro }}</span>
			</div>
			<div v-if="productos_carro <= 0 || mostrar_carrito_detalle"></div>
			<ListaProductosCarro v-else></ListaProductosCarro>
		</div>
	</header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ListaProductosCarro from "./ListaProductosCarro.vue";

export default {
	components: { ListaProductosCarro },
	setup() {
		const store = useStore();
		const productos_carro = computed(() => store.state.productos_carro);
		const mostrar_carrito_detalle = computed(() => store.state.mostrar_carrito_detalle);

		const cambiarEstadoCarritoDetalle = () => {
			store.dispatch("cambiarEstadoCarritoDetalle");
		};

		return { productos_carro, mostrar_carrito_detalle, cambiarEstadoCarritoDetalle };
	},
};
</script>

<style>
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: #f50;
	color: #eee;
	grid-area: header;
}

.link {
	text-decoration: none;
	color: #fff;
}

.link:hover {
	color: #fff;
}

.link:link {
	color: #fff;
}

.link:active {
	color: #fff;
}

.perfil {
	display: flex;
	align-items: center;
}

.carro-container {
	position: relative;
}
.carro-container-imagen {
	height: 1.875em;
	cursor: pointer;
	padding: 0 10px;
}

.productos-carro {
	position: absolute;
	color: white;
	bottom: 1.3125em;
	left: 2.062rem;
	font-size: 0.8125em;
	font-weight: bold;
}

@media (max-width: 576px) {
	.productos-carro {
		bottom: 1.0625rem;
		left: 2.0625rem;
	}
}
</style>
