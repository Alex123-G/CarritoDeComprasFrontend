<template>
	<h1>Hola mundo desde el Componente App</h1>
	<CardComponent />
</template>

<script>
import CardComponent from "./components/CardComponent";

export default {
	name: "App",
	components: { CardComponent },
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}
#app {
	background-color: red;
}
</style>
