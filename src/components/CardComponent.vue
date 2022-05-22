<template>
	<div class="container-card">
		<img :src="producto.url_img" alt="..." />
		<div class="container-card-body">
			<h5 class="container-card-brand">{{ producto.nombre_marca }}</h5>
			<p class="container-card-name">{{ producto.nombre_producto }}</p>
			<div class="container-card-price">
				<span class="font-weight-bold">S/ {{ producto.precio_producto }}</span>
				<button class="btn btn-comprar" @click="agregarProductoAlCarro(producto)">Comprar</button>
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
	padding: 15px;
	margin-bottom: 15px;
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
