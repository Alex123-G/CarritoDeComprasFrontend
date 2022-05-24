<!-- EN ESTE APP VA SER UN COMPONENTE GENERAL, ES DECIR QUE VA APARECER EN TODAS LAS PAGINAS, POR ENDE HAY QUE CAMBIAR LA RUTA CREAMOS U NUEVO ARCHIVO HOME Y LE COLOCAMOS TODOS ESTOS DATOS QUE ESTAN ABAJO -->
<template>
	<HeaderComponent></HeaderComponent>
	<CategoriasComponent></CategoriasComponent>
	<section class="section">
		<CardComponent v-for="producto of productos" :key="producto.id_producto" :producto="producto" />
	</section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
// import HeaderComponent from "../components/HeaderComponent";
import CategoriasComponent from "../components/CategoriasComponent.vue";
import CardComponent from "../components/CardComponent";
import { computed } from "@vue/reactivity";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "HomePage",
	components: { CardComponent, CategoriasComponent, HeaderComponent },
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
}
.section {
	max-width: 75em;
	margin: auto;
	display: grid;
	gap: 0.9375em;
	grid-template-columns: repeat(auto-fill, minmax(180px, 320px));
	align-content: center;
	justify-content: center;
	align-items: center;
}
</style>
