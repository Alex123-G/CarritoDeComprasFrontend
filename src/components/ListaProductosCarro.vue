<template>
	<div class="detalle_compra__content">
		<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle_compra__item">
			<!-- Aqui ira la lista de los productos del carro que se mostrar en la pantalla de inicio al presionar en el boton del carro y abajo de esta lista odnde
		aparecera los campos de cantidad por producto y posiblemente la imagen del producto y bajo de ello un boton el cual diga pagar y nos dirigira a la
		pantalla de transaccion con el detalle del pedido-->
			<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
			<span class="detalle_compra__texto">{{ item_carro.cantidad }}</span>
		</div>
		<a href="*" class="btn btn-success btn-sm">Pagar</a>
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
	position: fixed;
	top: 3.75em;
	right: 0.625em;
	background-color: rgb(255, 255, 255);
	/* border: 1px solid rgb(0, 0, 0, 0.1); */
	box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.2);
	padding: 0.4375em;
	border-radius: 0.3125em;
	color: black;
}
.detalle_compra__item {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid rgb(0, 0, 0, 0.2);
	margin: 5px 0;
}

.detalle_compra__item img {
	max-width: 3.4375em;
	margin: 0 5px;
}
.detalle_compra__texto {
	margin-right: 5px;
	margin-left: 5px;
}
</style>
