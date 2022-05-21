<template>
	<HeaderComponent></HeaderComponent>
	<CategoriasComponent></CategoriasComponent>
	<section class="section">
		<CardComponent />
	</section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import HeaderComponent from "./components/HeaderComponent";
import CategoriasComponent from "./components/CategoriasComponent.vue";
import CardComponent from "./components/CardComponent";

export default {
	name: "App",
	components: { HeaderComponent, CardComponent, CategoriasComponent },
	setup() {
		const storage = useStore();
		onMounted(() => {
			// Si tubiera un parametro, se le coloca una coma, y despues los valores del parametro
			storage.dispatch("fetchData");
		});
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
