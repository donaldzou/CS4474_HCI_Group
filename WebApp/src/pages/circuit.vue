<script>
import Navbar from "@/components/navbar.vue";
import {useSimulatorStore} from "@/store/simulatorStore.js";
import BottomNavBar from "@/components/bottomNavBar.vue";
import {supabase} from "@/supabase.js";

export default {
	name: "circuit",
	components: {BottomNavBar, Navbar},
	async setup(){
		const store = useSimulatorStore();
		const {data: {session}} = await supabase.auth.getSession();
		store.signedIn = session !== null;
		return {store}
	},
	async mounted() {

	},
	watch: {
		async 'store.signedIn'(newVal){
			if(newVal){
				await this.store.getCircuits()
			}
		}
	},
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
			<div class="w-100 h-100 d-flex">
				<h1 class="display-1 text-muted m-auto text-center">
					Click <i class="bi bi-plus"></i> at the top left to open/create circuits
				</h1>
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