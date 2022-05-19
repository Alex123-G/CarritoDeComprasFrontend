<template>
	<HeaderComponent></HeaderComponent>
	<CardComponent />
	<AsideComponent></AsideComponent>
</template>

<script>
import CardComponent from "./components/CardComponent";
import HeaderComponent from "./components/HeaderComponent";
import AsideComponent from "./components/AsideComponent.vue";

export default {
	name: "App",
	components: { CardComponent, HeaderComponent, AsideComponent },
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: #eee;
}
#app {
	display: grid;
	max-width: 1200px;
	margin: auto;
	grid-template-areas:
		"header header"
		"aside  section";
	gap: 0.75rem;
}
</style>
