<template>
	<HeaderComponent></HeaderComponent>
	<h3 class="text-decoration-underline sub-titulo">Detalle Pedido:</h3>
	<div class="container">
		<div v-if="carro.void === 'void'">
			<h4>Todavía no ha seleccionado ningún producto</h4>
			<router-link to="/" class="btn btn-success btn-sm">Buscar productos</router-link>
		</div>
		<div v-else class="detalle_compra_pedido">
			<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle_compra_pedido_item">
				<div class="container_img_nombreProducto">
					<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
					<span :title="item_carro.nombre_producto">{{ item_carro.nombre_producto }}</span>
				</div>
				<div class="fw-bolder name_item">
					<span class="">S/{{ item_carro.precio_producto * item_carro.cantidad }}</span>
					<div class="fw-bolder">
						<span class="">{{ item_carro.cantidad }} uds</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "TransaccionPage",
	setup() {
		const store = useStore();
		const carro = computed(() => store.state.carro);
		return { carro };
	},
	components: { HeaderComponent },
};
</script>

<style>
.sub-titulo {
	max-width: 1200px;
	margin: auto;
	margin: 40px auto;
}
.container {
	margin: 40px auto;
	max-width: 1200px;
	font-size: 1em;
}

.detalle_compra_pedido {
	display: flex;
	/* background-color: #b6b5b7; */
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 20px;
}

.container_img_nombreProducto {
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	max-width: 369px;
	gap: 8px;
}

.container_img_nombreProducto span {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.detalle_compra_pedido img {
	max-width: 80px;
	object-fit: contain;
}

.name_item {
	/* max-width: 0px; */
}
.detalle_compra_pedido_item {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: space-around;
	align-items: center;
	padding: 5px;
	border-bottom: 1px solid #000;
}
@media (max-width: 576px) {
	.container {
		font-size: 0.8em;
	}

	.detalle_compra_pedido {
		flex-wrap: wrap;
	}
	.container_img_nombreProducto {
		flex-wrap: wrap;
	}
}
</style>
