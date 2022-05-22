<template>
	<HeaderComponent></HeaderComponent>
	<CategoriasComponent></CategoriasComponent>
	{{ carro }}
	<section class="section">
		<CardComponent v-for="producto of productos" :key="producto.id_producto" :producto="producto" />
	</section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import HeaderComponent from "./components/HeaderComponent";
import CategoriasComponent from "./components/CategoriasComponent.vue";
import CardComponent from "./components/CardComponent";
import { computed } from "@vue/reactivity";

export default {
	name: "App",
	components: { HeaderComponent, CardComponent, CategoriasComponent },
	setup() {
		const store = useStore();
		onMounted(() => {
			// Si tubiera un parametro, se le coloca una coma, y despues los valores del parametro
			store.dispatch("fetchData");
		});
		const productos = computed(() => store.state.productos);
		const carro = computed(() => store.state.carro);
		return { productos, carro };
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: #eee;
	font-size: 15px;
}
.section {
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	gap: 12px;
	grid-template-columns: repeat(auto-fill, minmax(180px, 380px));
	align-content: center;
	justify-content: center;
	align-items: center;
}
</style>
