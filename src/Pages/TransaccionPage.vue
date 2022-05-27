<template>
	<HeaderComponent></HeaderComponent>
	<h3 class="text-decoration-underline text-center sub-titulo">Detalle del Pedido:</h3>
	<div class="container">
		<div v-if="carro.void === 'void'">
			<h4>Todavía no ha seleccionado ningún producto</h4>
			<router-link to="/" class="btn btn-success btn-sm">Buscar productos</router-link>
		</div>
		<div v-else class="detalle-compra-pedido">
			<div v-for="item_carro in carro" :key="item_carro.id_producto" class="detalle-compra-pedido-item">
				<div class="container-img-nombreProducto">
					<img :src="item_carro.url_img" :alt="item_carro.nombre_producto" :title="item_carro.nombre_producto" />
					<span :title="item_carro.nombre_producto">{{ item_carro.nombre_producto }}</span>
				</div>
				<div class="fw-bold">
					<span>S/{{ item_carro.precio_producto * item_carro.cantidad_producto }}</span>
					<div>
						<span>{{ item_carro.cantidad_producto }} uds</span>
					</div>
				</div>
			</div>
			<h3 class="text-center">
				Precio Total S/ <span> {{ precio_total }}</span>
			</h3>
			<button class="btn btn-sm btn-comprar" @click="let a = realizarTransaccion(carro);">Realizar Compra</button>
			<div v-if="respuesta_transaccion.estado_transaccion === false" class="alert alert-danger">
				<p>Sucedió un error comuníquese con un adminstrador</p>
			</div>
			<p v-else-if="respuesta_transaccion.estado_transaccion === true" class="alert alert-success">
				Transaccion Exitosa. Su código de pedido es <span>{{ respuesta_transaccion.Codigo_pedido }}</span>
			</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import HeaderComponent from "../components/HeaderComponent.vue";
import { crear_Transaccion } from "../servicios/TransaccionPageService";

export default {
	name: "TransaccionPage",
	components: { HeaderComponent },

	setup() {
		const store = useStore();
		const carro = computed(() => store.state.carro);
		const precio_total = computed(() => store.getters.precio_total);
		const respuesta_transaccion = ref({ estado_transaccion: null, Codigo_pedido: null });
		const productos = [];

		const realizarTransaccion = async carro => {
			for (const producto in carro) {
				productos.push(carro[producto]);
			}
			const respuesta = await crear_Transaccion(productos);
			respuesta_transaccion.value = respuesta;
		};

		return { carro, realizarTransaccion, precio_total, respuesta_transaccion };
	},
};
</script>

<style>
.sub-titulo {
	max-width: 75em;
	margin: auto;
	margin: 2.5em auto;
}
.container {
	font-size: 1em;
}

.detalle-compra-pedido {
	max-width: 50em;
	margin: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 1.5625em;
}

.container-img-nombreProducto {
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	max-width: 23.125em;
	gap: 0.5em;
}

.container-img-nombreProducto span {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.detalle-compra-pedido img {
	max-width: 5em;
	object-fit: contain;
}

.detalle-compra-pedido-item {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-around;
	align-items: center;
	padding: 0.3125em;
	border-bottom: 1px solid #000;
}
@media (max-width: 576px) {
	.container {
		font-size: 0.8em;
	}

	.detalle-compra-pedido {
		flex-wrap: wrap;
	}
	.container-img-nombreProducto {
		flex-wrap: wrap;
	}
}
</style>
