<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="En el componente Hellowordl existe una propiead la cual tenemos que pasarle un valor y es lo que estamos escribiendo aca" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
