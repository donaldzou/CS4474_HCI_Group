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
			<div class="w-100 position-absolute iframe"
			     style="height: calc(100% - 70px);"
			     v-for="c in this.store.openedCircuits"
			     :key="''+c+''"
			     :class="{'active': this.store.activeCircuit === c}"
			>
				<iframe src="https://scratch.mit.edu/projects/976361152/embed"
				        allowfullscreen
				        allowtransparency="true" style="height: 100%; width: 100%;">

				</iframe>
			</div>
		</div>
<!--		<BottomNavBar></BottomNavBar>-->
	</div>
</template>

<style scoped>
.iframe{
	z-index: 1;
}

.iframe.active{
	z-index: 10;
}
</style>