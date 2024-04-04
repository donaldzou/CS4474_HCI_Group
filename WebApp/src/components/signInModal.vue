<script>
import Signin from "@/components/signin.vue";
import Signup from "@/components/signup.vue";

export default {
	name: "signInModal",
	components: {Signup, Signin},
	data(){
		return {
			mode: "signIn"
		}
	}
}
</script>

<template>
	<div class="newCircuitModal d-flex">
		<div class="card m-auto" style="width: 500px">
			<div class="card-header d-flex">
				<span class="fw-bold">
					{{ this.mode === 'signIn' ? "Sign In":"Sign Up"}}
				</span>
				<a role="button" class="ms-auto text-body" @click='this.$emit("hideModal");'>
					<i class="bi bi-x-lg"></i>
				</a>
			</div>
			<div class="card-body">
				<nav class="nav nav-pills nav-fill">
					<a class="nav-link"
					   :class="{active: this.mode === 'signIn'}"
					   role="button" @click="this.mode = 'signIn'">Sign In</a>
					<a class="nav-link"
					   role="button"
					   :class="{active: this.mode === 'signUp'}"
					   @click="this.mode = 'signUp'"
					>Sign Up</a>
				</nav>
				<hr>
				<div>
					<Transition name="slide-fade" mode="out-in">
						<Signin
							@hideModal="this.$emit('hideModal')"
							v-if="this.mode === 'signIn'"></Signin>
						<Signup
							@hideModal="this.$emit('hideModal')"
							v-else>
						</Signup>
					</Transition>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.signInSwitches h4{
	border-bottom: 3px solid #2a2a2a;
	transition: all 0.2s ease-in-out;
}

.signInSwitches h4.active{
	border-bottom: 3px solid #ffffff;
}

</style>