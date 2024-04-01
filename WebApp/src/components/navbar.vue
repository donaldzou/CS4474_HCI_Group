<script>
import CircuitNavBtn from "@/components/circuitNavBtn.vue";
import {useSimulatorStore} from "@/store/simulatorStore.js";
import {supabase} from "@/supabase.js";
import NewCircuitModal from "@/components/newCircuitModal.vue";
import HelpMenu from "@/components/helpMenu.vue";

export default {
	name: "navbar",
	data(){
		return {
			username: "",
			newCircuitName: "",
			showModal: false,
			showHelpMenu: false
		}
	},
	setup(){
		const store = useSimulatorStore();
		return {store}
	},
	methods: {
		async signout(){
			await supabase.auth.signOut({
				redirect: '/'
			})
		},
		downloadCircuit(){
			let circuit = this.store.circuits.find(x => x.id === this.store.activeCircuit);
			if (circuit){
				let str = JSON.stringify(circuit);
				const blob = new Blob([str], { type: "application/json" });
				const jsonObjectUrl = URL.createObjectURL(blob);
				const filename = `${circuit.circuitName}.json`;
				const anchorEl = document.createElement("a");
				anchorEl.href = jsonObjectUrl;
				anchorEl.download = filename;
				anchorEl.click();
			}
		}
	},
	async mounted() {
		const { data: { user }, error } = await supabase.auth.getUser()
		if (!error){
			let dn = user.user_metadata.displayName;
			if(dn.split(' ').length >= 2){
				this.username = dn.split(' ')[0][0] + dn.split(' ')[1][0]
			}else{
				this.username = dn[0] + (dn[1] ? dn[1] : "");
			}
		}
	},
	computed: {
		openedCircuits(){
			return this.store.openedCircuits.map(x => {
				return this.store.circuits.find(k => k.id === x);
			})
		}
	},
	components: {HelpMenu, NewCircuitModal, CircuitNavBtn}
}
</script>

<template>
	<nav class="navbar py-3 sticky-top">
		<div class="container-fluid">
			<div class="d-flex gap-2 w-100">
				<div class="d-flex gap-2 flex-grow-1 overflow-scroll">
					<CircuitNavBtn
						:buttonInfo="btn"
						v-for="btn in openedCircuits"></CircuitNavBtn>
					<button class="btn btn-secondary" @click="showModal = true">
						<i class="bi bi-plus"></i>
					</button>
				</div>
				<div class="ms-auto d-flex align-items-center gap-3">
					<a class="nav-link fw-bold me-2" style="color: var(--purple)" @click="this.showHelpMenu = true"
						role="button"
					>
						Need Help? <i class=" ms-1 bi bi-search"></i>
					</a>
					<div class="btn-group btnShareGroup" role="group">
						<button type="button" class="btn btn-primary"
						        @click="this.downloadCircuit()"
							:disabled="!this.store.activeCircuit"
						><i class="bi bi-send me-2"></i>Share</button>
						<button type="button" class="btn btn-outline-primary"
						        @click="this.downloadCircuit()"
					        :disabled="!this.store.activeCircuit"
						>
							<i class="bi bi-link-45deg"></i>
						</button>
					</div>
					<div class="btn userInfoBtn p-0 d-flex"
					     type="button" data-bs-toggle="dropdown" aria-expanded="false"
					     style="border-radius: 50%; height: 100%; width: 38px;">
						<span class="m-auto fw-bold">{{this.username}}</span>
						<ul class="dropdown-menu dropdown-menu-end me-1">
							<li>
								<a class="dropdown-item text-danger fw-bold" role="button"
									@click="this.signout()"
								>Sign Out</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<Transition name="slide-fade">
			<NewCircuitModal
				@hideModal="showModal = false"
				v-if="this.showModal"></NewCircuitModal>
		</Transition>
		<Transition name="slide-fade">
			<HelpMenu v-if="this.showHelpMenu" @hideModal="this.showHelpMenu = false"></HelpMenu>
		</Transition>
	</nav>
</template>

<style scoped>
* {
	--purple: rgb(61, 65, 187)
}

.navbar {
	background-color: rgb(241 241 242);
}

.circuitNavBtn {
	min-width: 200px;
	text-align: left;
	text-transform: capitalize;
	font-weight: bold;
}

.btnShareGroup {
	.btn {
		border-color: var(--purple);
	}

	.btn-primary, .btn-outline-primary:hover {
		background-color: var(--purple);
		color: white
	}

	.btn-outline-primary {
		color: var(--purple);
	}
}

.userInfoBtn{
	background-color: rgb(255 154 81);
}

.newCircuitModal{
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.35);
	z-index: 1000;

}

::-webkit-scrollbar{
	display: none;
}
</style>