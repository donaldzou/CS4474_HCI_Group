<script>
import Navbar from "@/components/navbar.vue";
import {useSimulatorStore} from "@/store/simulatorStore.js";

export default {
	name: "circuit",
	components: {Navbar},
	setup(){
		const store = useSimulatorStore();
		return {store}
	},
	async mounted() {
		await this.store.getCircuits()
	}
}
</script>

<template>
	<div>
		<Navbar></Navbar>
		<div id="canvas"></div>
	</div>
</template>

<style scoped>

</style>