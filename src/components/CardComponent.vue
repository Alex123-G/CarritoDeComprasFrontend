<template>
	<div class="container-card">
		<img :src="producto.url_img" alt="..." class="image_card" />
		<div class="container-card-body">
			<h5 class="container-card-brand">{{ producto.nombre_marca }}</h5>
			<p class="container-card-name">{{ producto.nombre_producto }}</p>
			<div class="container-card-price">
				<span class="font-weight-bold">S/ {{ producto.precio_producto }}</span>
				<button class="btn btn-sm btn-comprar" @click="agregarProductoAlCarro(producto)">Agregar</button>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";

export default {
	props: ["producto"],
	setup() {
		const store = useStore();
		const agregarProductoAlCarro = producto => {
			store.dispatch("agregarProductoCarro", producto);
		};

		return { agregarProductoAlCarro };
	},
};
</script>
<style>
.container-card {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	background-color: #fff;
	border-radius: 4px;
	padding: 0.9375em;
	margin-bottom: 0.9375em;
}

.btn-comprar {
	background-color: #ff5500;
	border-color: #ff5500;
	color: white;
}
.container-card-price {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
