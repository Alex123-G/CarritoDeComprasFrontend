<template>
	<HeaderComponent></HeaderComponent>
	<CategoriasComponent></CategoriasComponent>
	<section class="section">
		<CardComponent v-for="producto of productos" :key="producto.id_producto" :producto="producto" />
	</section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "vuex";
import CategoriasComponent from "../components/CategoriasComponent.vue";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
	name: "HomePage",
	components: { HeaderComponent, CategoriasComponent, CardComponent },
	setup() {
		const store = useStore();
		onMounted(() => {
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
}
.section {
	max-width: 75em;
	margin: auto;
	display: grid;
	gap: 0.9375em;
	grid-template-columns: repeat(auto-fill, minmax(11.25em, 20em));
	align-content: center;
	justify-content: center;
	align-items: center;
}
</style>
