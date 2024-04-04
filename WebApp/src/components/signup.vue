<script>
import {supabase} from "@/supabase.js";

export default {
	name: "signup",
	data(){
		return {
			name: "",
			email: "",
			password: "",
			error: false,
			errorMsg: "",
			loading: false
		}
	},
	methods:{
		async signup(){
			if (this.email && this.name && this.password){
				this.loading = true;
				const sb = supabase;
				const {data, error} = await sb.auth.signUp({
					email: this.email,
					password: this.password,
					options: {
						data: {
							displayName: this.name
						}
					}
				});
				console.log(data, error)
				if (!error){
					await sb.auth.setSession(data.session);
					this.$emit("hideModal")
				}else{
					this.error = true;
					this.errorMsg = error.message;

					if (error.message === "User already registered"){
						this.errorMsg = "This email already registered. Do you want to sign in?"
					}
				}
				this.loading = true;
			}
		}
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
			<div class="col-sm-12">
				<label for="nameInput" class="form-label">Name</label>
				<input type="email" class="form-control"
				       v-model="name"
				       @keyup.enter="this.signup()"
				       :disabled="this.loading"
				       id="nameInput">
			</div>
			<div class="col-sm-6">
				<label for="emailInput" class="form-label">Email address</label>
				<input type="email" class="form-control"
				       v-model="email"
				       @keyup.enter="this.signup()"
				       :disabled="this.loading"
				       id="emailInput">
			</div>
			<div class="col-sm-6">
				<label for="passwordInput" class="form-label">Password</label>
				<input type="password" class="form-control"
				       v-model="password"
				       @keyup.enter="this.signup()"
				       :disabled="this.loading"
				       id="passwordInput">
			</div>
			<div class="col-12">
				<button class="btn btn-outline-primary w-100"
				        :disabled="this.loading || (!this.email || !this.password || !this.name)"
				        @click="this.signup()">
					{{this.loading ? "Signing Up...":"Sign Up"}}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>