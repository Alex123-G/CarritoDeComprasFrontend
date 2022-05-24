<template>
	<HeaderComponent></HeaderComponent>
	<h3 class="text-decoration-underline sub-titulo text-center">Detalle Pedido:</h3>
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
					<span>S/{{ item_carro.precio_producto * item_carro.cantidad_producto }}</span>
					<div>
						<span>{{ item_carro.cantidad_producto }} uds</span>
					</div>
				</div>
			</div>
			<button class="btn btn-sm btn-comprar" @click="realizarTransaccion(carro)">Realizar Compra</button>
		</div>
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
	name: "TransaccionPage",
	components: { HeaderComponent },

	setup() {
		const store = useStore();
		const carro = computed(() => store.state.carro);

		const realizarTransaccion = carro => {
			const productos = [];
			const objeto_data = { Id_usuario: "1", productos };

			for (const producto in carro) {
				productos.push(carro[producto]);
			}

			const crear_Transaccion = async objeto_data => {
				try {
					const JsonObjeto_data = JSON.stringify(objeto_data);
					const res = await fetch("https://localhost:44372/api/v1/pedidos", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JsonObjeto_data,
					});
					const data_res = await res.json();
					console.log(data_res);
				} catch (error) {
					console.log(error);
				}
			};

			crear_Transaccion(objeto_data);
		};
		return { carro, realizarTransaccion };
	},
};
</script>

<style>
.sub-titulo {
	max-width: 1200px;
	margin: auto;
	margin: 40px auto;
}
.container {
	font-size: 1em;
}

.detalle_compra_pedido {
	max-width: 800px;
	margin: auto;
	display: flex;
	/* background-color: #b6b5b7; */
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 25px;
}

.container_img_nombreProducto {
	display: flex;
	flex-wrap: wrap;
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
	flex-wrap: wrap;
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
