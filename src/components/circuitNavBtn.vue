<script>
import {useSimulatorStore} from "@/store/simulatorStore.js";

export default {
	name: "circuitNavBtn",
	setup(){
		const store = useSimulatorStore();
		return {store}
	},
	props: {
		buttonInfo: Object
	},
	methods: {
		closeCircuit(){
			if (this.store.activeCircuit === this.buttonInfo.id){
				this.store.activeCircuit = this.store.openedCircuits.find(x => x)?.id;
			}
			this.store.openedCircuits.splice(this.store.openedCircuits.findIndex(x => x === this.buttonInfo.id), 1)
		}
	}
}
</script>

<template>
	<button class="btn circuitNavBtn active d-flex"
	        @click="this.store.activeCircuit = this.buttonInfo.id;"
			:class="[this.store.activeCircuit === this.buttonInfo.id ? 'btn-primary active':'btn-secondary']"
	>
		{{ buttonInfo.circuitName }}
		<a role="button" class="text-white ms-auto"
		   @click.stop.prevent="closeCircuit()"
		   style="transform: scale(1.2)">
			<i class="bi bi-x"></i>
		</a>
	</button>
</template>

<style scoped>

</style>