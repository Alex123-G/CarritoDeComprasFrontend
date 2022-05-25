<template>
	<div class="detalle-compra-content">
		<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle-compra-item">
			<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
			<span class="detalle-compra-texto">{{ item_carro.cantidad_producto }}</span>
		</div>
		<router-link to="/transaccion" class="btn btn-success btn-sm">Pagar</router-link>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		const carro = computed(() => store.state.carro);
		return { carro };
	},
};
</script>

<style>
.detalle-compra-content {
	position: absolute;
	top: 3.5em;
	background-color: rgb(255, 255, 255);
	box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.2);
	padding: 0.25em;
	color: #000;
	font-weight: bold;
}

.detalle-compra-item {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid rgb(0, 0, 0, 0.2);
	margin: 5px 0;
	gap: 0.625em;
	justify-content: center;
	align-items: center;
}

.detalle-compra-item img {
	max-width: 3.4375em;
	margin: 0 5px;
}
.detalle-compra-texto {
	margin: 0 8px;
}

@media (max-width: 576px) {
	.detalle-compra-content {
		top: 2.8125em;
	}

	.detalle-compra-item img {
		max-width: 3.75em;
	}
}
</style>
