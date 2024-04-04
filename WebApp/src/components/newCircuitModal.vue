<script>
import {useSimulatorStore} from "@/store/simulatorStore.js";
import {v4} from "uuid";

export default {
	name: "newCircuitModal",
	setup(){
		const store = useSimulatorStore();
		return{store}
	},
	data(){
		return{
			newCircuitName: "",
			fileSelected: false
		}
	},
	methods: {
		async submitNewCircuit(){
			if (this.store.signedIn){
				const success = await this.store.createCircuit(this.newCircuitName);
				if (success) this.newCircuitName = "";
			}else{
				let id = v4();
				this.store.circuits.push({
					id: id,
					circuitName: this.newCircuitName,
				});
				this.store.openedCircuits.push(id)
				this.store.activeCircuit = id;
				this.newCircuitName = "";
			}
		},
		openCircuit(c){
			if (!this.store.openedCircuits.find(x => x === c.id)){
				this.store.openedCircuits.push(c.id)
			}
			this.store.activeCircuit = c.id
			this.$emit('hideModal')
		},
		async handleFile(e){
			if (e.target.files.length === 1){
				this.fileSelected = true;
				let f = e.target.files[0];
				let fileReader = new FileReader();
				fileReader.readAsText(f);
				fileReader.onloadend = async (r) => {
					let name = JSON.parse(r.target.result);
					if (name.circuitName){
						this.newCircuitName = name.circuitName;
						await this.submitNewCircuit();
						e.target.value = '';
						this.fileSelected = false;
					}
				}
			}else{
				this.fileSelected = false;
			}
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
					<button class="btn btn-primary w-100 mb-2" @click="submitNewCircuit()">Create</button>

					<small>Or upload a circuit</small>
					<div class="d-flex gap-2 mt-1">
						<input class="form-control" type="file" @change="(e) => {handleFile(e)}">
						<button class="btn btn-primary" :disabled="!this.fileSelected">Upload</button>
					</div>

				</div>
				<hr>
				<div>
					<p class="mb-1">Open a circuit</p>
					<div class="list-group" v-if="this.store.signedIn">
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
					<div v-else>
						<small
							class="text-muted">
							Sign In to access your circuits on the cloud
						</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>