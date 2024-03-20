<script>
import {supabase} from "@/supabase.js";

export default {
	name: "signin",
	data(){
		return {
			email: "",
			password: "",
			error: false,
			errorMsg: "",
			loading: false
		}
	},
	methods: {
		async signin(){
			if (this.email && this.password){
				this.loading = true;
				const sb = supabase;
				const {data, error} = await sb.auth.signInWithPassword({
					password: this.password,
					email: this.email
				});
				if (!error){
					await sb.auth.setSession(data.session);
					this.$router.push("/circuit");
				}else{
					this.error = true;
					this.errorMsg = error.message;
				}
				this.loading = false;
			}
		}
	},
	mounted() {

	}
}
</script>

<template>
	<div>
		<div class="alert alert-danger" v-if="this.error">
			<i class="bi bi-exclamation-circle-fill me-2"></i>
			{{this.errorMsg}}
		</div>
		<div class="row gy-4">
			<div class="col-12">
				<label for="emailInput" class="form-label">Email address</label>
				<input type="email" class="form-control form-control-lg"
				       @keyup.enter="this.signin()"
				       v-model="this.email"
				       :disabled="this.loading"
				       id="emailInput">
			</div>
			<div class="col-12">
				<label for="passwordInput" class="form-label">Password</label>
				<input type="password" class="form-control form-control-lg"
				       @keyup.enter="this.signin()"
				       v-model="this.password"
				       :disabled="this.loading"
				       id="passwordInput">
			</div>
			<div class="col-12">
				<button class="btn btn-lg bg-body w-100"
				        :disabled="this.loading || (!this.email || !this.password)"
				        @click="this.signin()">
					{{this.loading ? "Signing In...":"Sign In"}}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>