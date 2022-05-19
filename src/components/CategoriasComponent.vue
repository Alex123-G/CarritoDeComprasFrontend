<template>
	<div class="container-subtitle-form">
		<h5 class="subtitle">Listar productos por categoría</h5>
		<form class="container-select align-items-center">
			<select name="" id="" class="custom-select-sm">
				<option value="">Seleccione una categoria</option>
				<option value="">Xiaomi</option>
				<option value="">Lg</option>
				<option value="">Lenovo</option>
				<option value="">Samsung</option>
			</select>
			<button type="button" class="btn btn-success btn-lg">Listar</button>
		</form>
	</div>
</template>

<script></script>

<style>
.container-subtitle-form {
	max-width: 1200px;
	margin: 45px auto;
	padding-left: 5px;
}
.container-select {
	display: flex;
	gap: 0.625rem;
}
.subtitle {
	font-size: 1rem;
}
/* Cambia el responsive desing de 
@media (min-width: 576px) { ... }
@media (min-width: 768px) { ... }
*/
</style>
