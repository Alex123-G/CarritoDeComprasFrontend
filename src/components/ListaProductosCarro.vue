<template>
	<div class="detalle_compra__content">
		<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle_compra__item">
			<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
			<span class="detalle_compra__texto">{{ item_carro.cantidad }}</span>
		</div>
		<a href="/PAGINA DE TRANSACCION" class="btn btn-success btn-sm">Pagar</a>
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
.detalle_compra__content {
	position: absolute;
	top: 3.5em;
	/* right: 200px; */
	background-color: rgb(255, 255, 255);
	box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.2);
	padding: 0.25em;
	color: #000;
	font-weight: bold;
}

.detalle_compra__item {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid rgb(0, 0, 0, 0.2);
	margin: 5px 0;
	gap: 10px;
	justify-content: center;
	align-items: center;
}

.detalle_compra__item img {
	max-width: 3.4375em;
	margin: 0 5px;
}
.detalle_compra__texto {
	margin: 0 8px;
}

@media (max-width: 576px) {
	.detalle_compra__content {
		top: 45px;
	}

	.detalle_compra__item img {
		max-width: 90px;
	}
}
</style>
