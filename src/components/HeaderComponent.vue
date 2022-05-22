<template>
	<header class="header">
		<div class="titulo">
			<h1>FastBuy</h1>
		</div>
		<div class="perfil">
			<span class="usuario">Alex Gallozo</span>
			<div>
				<img v-bind:src="require('../imgs/icons/Untitled.svg')" alt="carrito" style="height: 30px" />
				<span>{{ productos_carro }}</span>
			</div>
		</div>
	</header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
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
</style>
