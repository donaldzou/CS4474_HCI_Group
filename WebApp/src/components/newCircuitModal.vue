<script>
import {useSimulatorStore} from "@/store/simulatorStore.js";

export default {
	name: "newCircuitModal",
	setup(){
		const store = useSimulatorStore();
		return{store}
	},
	data(){
		return{
			newCircuitName: "",
		}
	},
	methods: {
		async submitNewCircuit(){
			const success = await this.store.createCircuit(this.newCircuitName);
			if (success) this.newCircuitName = "";
			// this.$emit("hideModal");
		},
		openCircuit(c){
			if (!this.store.openedCircuits.find(x => x === c.id)){
				this.store.openedCircuits.push(c.id)
			}
			this.store.activeCircuit = c.id
			this.$emit('hideModal')
		}
	}
}
</script>

<template>
	<div class="newCircuitModal d-flex">
		<div class="card m-auto" style="width: 500px">
			<div class="card-header d-flex">
				<span class="fw-bold">New Circuit</span>
				<a role="button" class="ms-auto text-body" @click='this.$emit("hideModal");'>
					<i class="bi bi-x-lg"></i>
				</a>
			</div>
			<div class="card-body">
				<div>
					<label for="newCircuitNameInput" class="mb-1">Circuit Name</label>
					<input class="form-control mb-3" type="text"
					       id="newCircuitNameInput"
					       v-model="newCircuitName">
					<button class="btn btn-primary w-100" @click="submitNewCircuit()">Create</button>
				</div>
				<hr>
				<div>
					<p class="mb-1">Open a circuit</p>
					<div class="list-group">
						<a role="button" class="list-group-item"
						   @click="openCircuit(c)"
						   v-for="c in store.circuits">
							{{ c.circuitName }}
						</a>
						<small
							class="text-muted"
							v-if="store.circuits.length === 0">
							You don't have any circuit yet.
						</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>