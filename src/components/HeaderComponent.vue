<template>
	<header class="header">
		<div class="titulo">
			<h1>FastBuy</h1>
		</div>
		<div class="perfil">
			<span class="usuario">Usuario</span>
			<div class="carro_container">
				<img v-bind:src="require('../imgs/icons/Untitled.svg')" alt="carrito" style="height: 30px" />
				<span v-if="productos_carro <= 0"></span>
				<span v-else-if="productos_carro > 9" class="productos_carro">+9</span>
				<span v-else class="productos_carro">{{ productos_carro }}</span>
			</div>
			<ListaProductosCarro></ListaProductosCarro>
		</div>
	</header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ListaProductosCarro from "./ListaProductosCarro.vue";

export default {
	name: "HeaderComponent",
	components: { ListaProductosCarro },
	setup() {
		const store = useStore();
		const productos_carro = computed(() => store.state.productos_carro);
		return { productos_carro };
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
.productos_carro {
	position: absolute;
	border-radius: 1000px;
	padding: 3px 6px;
	color: white;
	top: -10px;
	left: 12px;
	font-size: 12px;
	font-weight: bolder;
}
</style>
