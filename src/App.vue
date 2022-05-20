<template>
	<HeaderComponent></HeaderComponent>
	<CategoriasComponent></CategoriasComponent>
	<SectionComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import SectionComponent from "./components/SectionComponent";
import CategoriasComponent from "./components/CategoriasComponent.vue";

export default {
	name: "App",
	components: { HeaderComponent, SectionComponent, CategoriasComponent },
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: #eee;
	font-size: 15px;
}
</style>
