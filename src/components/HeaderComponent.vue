<template>
	<header class="header">
		<div class="titulo">
			<h1>FastBuy</h1>
		</div>
		<div class="perfil">
			<span class="usuario">Admin</span>
			<div class="carro_container">
				<img v-bind:src="require('../imgs/icons/Untitled.svg')" alt="carrito" class="carro_container_imagen" @click="cambiarEstadoCarritoDetalle()" />
				<span v-if="productos_carro <= 0"></span>
				<span v-else-if="productos_carro > 9" class="productos_carro">+9</span>
				<span v-else class="productos_carro">{{ productos_carro }}</span>
			</div>
			<div v-if="productos_carro <= 0 || mostrar_carrito_detalle"></div>
			<ListaProductosCarro v-else></ListaProductosCarro>
			<!-- <span v-if="mostrar_carrito_detalle">Hola</span> -->
		</div>
	</header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ListaProductosCarro from "./ListaProductosCarro.vue";

export default {
	components: { ListaProductosCarro },
	props: {
		propiedad: String,
	},
	setup() {
		const store = useStore();
		const productos_carro = computed(() => store.state.productos_carro);
		const mostrar_carrito_detalle = computed(() => store.state.mostrar_carrito_detalle);
		const cambiarEstadoCarritoDetalle = () => {
			store.dispatch("cambiarEstadoCarritoDetalle");
		};

		// cambiarEstadoCarritoDetalle

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
.perfil {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.carro_container {
	position: relative;
}
.carro_container_imagen {
	height: 30px;
	cursor: pointer;
}

.productos_carro {
	position: absolute;
	color: white;
	bottom: 20px;
	left: 24px;
	font-size: 12px;
	font-weight: bolder;
}
</style>
