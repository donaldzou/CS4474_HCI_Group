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
	}
}
</script>

<template>
	<button class="btn circuitNavBtn active d-flex"
	        @click="this.store.activeCircuit = this.buttonInfo.id;"
			:class="[this.store.activeCircuit === this.buttonInfo.id ? 'btn-primary active':'btn-secondary']"
	>
		{{ buttonInfo.name }}
		<a role="button" class="text-white ms-auto" style="transform: scale(1.2)">
			<i class="bi bi-x"></i>
		</a>
	</button>
</template>

<style scoped>

</style>