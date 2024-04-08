<script>
import {v4} from "uuid"
export default {
	name: "helpMenu",
	methods: {
		getUUID(){
			return v4();
		}
	},
	data(){
		return {
			helpMenu: [
				{
					name: "Battery",
					description: "Used to send current through your circuit. "
				},
				{
					name: "Light Bulb",
					description: "Light: Emits light when powered. The light bulbs behave Ohmically, the light bulb brightness is proportional to the power through the bulb, and brightness is at 2000 W."
				},
				{
					name: "Resistor",
					description: "Adds resistance to your circuit. The colored bands on the resistors accurately represent the resistance within ±5%, as indicated by the\n" +
						"gold tolerance band."
				},
				{
					name: "Switch",
					description: "Creates and breaks a connection in your circuit. "
				},
				{
					name: "Fuse",
					description: "When fuses are connected in series and the current suddenly exceeds the highest rating, one fuse will randomly blow regardless of current rating."
				},
				{
					name: "Sammy",
					description: "Sammy does nothing wrong, and Sammy has a resistance of 100000 Ω, but to avoid electrocution, it will bark and disconnect from the circuit if the voltage across it exceeds 100 V."
				}
			]
		}
	}
}
</script>

<template>
	<div class="newCircuitModal d-flex">
		<div class="card m-auto" style="width: 500px">
			<div class="card-header d-flex">
				<span class="fw-bold">Help</span>
				<a role="button" class="ms-auto text-body" @click='this.$emit("hideModal");'>
					<i class="bi bi-x-lg"></i>
				</a>
			</div>
			<div class="card-body">
				<div class="accordion" id="helpMenuAccordion">
					<div class="accordion-item" v-for="(h, index) in this.helpMenu">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button"
							        data-bs-toggle="collapse" :data-bs-target="'#accordion_' + index">
								{{h.name}}
							</button>
						</h2>
						<div :id="'accordion_' + index" class="accordion-collapse collapse" data-bs-parent="#helpMenuAccordion">
							<div class="accordion-body">
								{{h.description}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>