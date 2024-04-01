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
	<div class="d-flex flex-column h-100">
		<Navbar></Navbar>
		<div id="canvas" class="flex-grow-1">
			<div class="w-100 h-100 "
			     v-for="c in this.store.openedCircuits"
			     :key="c"
			     :class="{'active': this.store.activeCircuit === c}"
			>
				<iframe src="https://scratch.mit.edu/projects/976361152/embed"

				        allowfullscreen
				        allowtransparency="true" style="height: 100%; width: 100%;">

				</iframe>
			</div>
		</div>
		<BottomNavBar></BottomNavBar>
	</div>
</template>

<style scoped>
.iframe{
	display: none
}

.iframe.active{
	display: block !important;
}
</style>