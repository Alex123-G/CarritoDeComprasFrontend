<template>
	<div class="container-subtitle-form">
		<h4 class="fw-normal">Filtrar productos por categoría:</h4>
		<form class="container-select align-items-center">
			<!-- <select name="" id="" class="custom-select-sm class="selectpicker""> -->
			<select name="" id="" class="form-select form-select">
				<option value="">Seleccione una categoria</option>
				<option value="">Xiaomi</option>
				<option value="">Lg</option>
				<option value="">Lenovo</option>
				<option value="">Samsung</option>
			</select>
			<button type="button" class="btn btn-success btn-sm">Listar</button>
		</form>
	</div>
</template>

<script></script>

<style>
.container-subtitle-form {
	max-width: 75em;
	margin: 2.8125em auto;
	padding-left: 0.3125em;
}
.container-select {
	display: flex;
	gap: 0.625em;
}
.btn {
	padding-left: 1.25em;
	padding-right: 1.25em;
	font-size: 1.25em;
}
/* Cambia el responsive desing de
*/
</style>
