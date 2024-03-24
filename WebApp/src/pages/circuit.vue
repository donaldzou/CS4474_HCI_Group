<script>
import Navbar from "@/components/navbar.vue";
import {useSimulatorStore} from "@/store/simulatorStore.js";
import BottomNavBar from "@/components/bottomNavBar.vue";

export default {
	name: "circuit",
	components: {BottomNavBar, Navbar},
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
		<BottomNavBar></BottomNavBar>
	</div>
</template>

<style scoped>

</style>