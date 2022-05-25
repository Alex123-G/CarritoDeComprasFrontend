import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/globalStore";
import App from "./App.vue";
import TransaccionPage from "./Pages/TransaccionPage.vue";
import HomePage from "./Pages/HomePage.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/transaccion",
		name: "transaccion",
		component: TransaccionPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
