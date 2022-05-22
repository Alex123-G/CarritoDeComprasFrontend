<template>
	<div>
		<!-- Aqui ira la lista de los productos del carro que se mostrar en la pantalla de inicio al presionar en el boton del carro y abajo de esta lista odnde
		aparecera los campos de cantidad por producto y posiblemente la imagen del producto y bajo de ello un boton el cual diga pagar y nos dirigira a la
		pantalla de transaccion con el detalle del pedido-->
		{{ carro }}
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

<style lang="scss" scoped></style>
