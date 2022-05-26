<template>
	<div class="container-subtitle-form">
		<h4 class="fw-normal">Filtrar productos por categoría:</h4>
		<form @submit.prevent="listarProductosPorId" class="container-select align-items-center" enctype="multipart/form-data">
			<select id="id_marca" class="form-select form-select" v-model="id_marca">
				<option value="0">Listar todo</option>
				<option v-for="marca in marcas" :key="marca.id_marca" :value="marca.id_marca">{{ marca.nombre_marca }}</option>
			</select>
			<button class="btn btn-success btn-sm">Listar</button>
		</form>
	</div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { listarProdsById } from "../servicios/HomePageService.js";
export default {
	name: "CategoriasComponent",
	data() {
		return {
			id_marca: 0,
		};
	},
	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch("getMarcas");
		});

		const listarProductosPorId = e => {
			const productos_por_categoria = listarProdsById(e.target.id_marca.value);
			store.dispatch("getProductosById", productos_por_categoria);
		};

		const marcas = computed(() => store.state.marcas);

		return { marcas, listarProductosPorId };
	},
};
</script>

<style>
.container-subtitle-form {
	max-width: 75em;
	margin: 2.8125em auto;
	padding-left: 0.3125em;
}
.container-select {
	display: flex;
	gap: 0.625em;
}
.btn {
	padding-left: 1.25em;
	padding-right: 1.25em;
	font-size: 1.25em;
}
</style>
