<template>
	<div>
		<h1>Esto es la pagina TransaccionPage</h1>
		<div class="detalle_compra__content">
			<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle_compra__item">
				<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
				<span class="detalle_compra__texto">{{ item_carro.cantidad }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
	name: "TransaccionPage",

	setup() {
		const store = useStore();
		const carro = computed(() => store.state.carro);
		return { carro };
	},
};
</script>

<style></style>
