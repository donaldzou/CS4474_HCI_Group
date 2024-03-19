<script>
export default {
	name: "welcome",
	data(){
		return {
			mode: "signin"
		}
	}
}
</script>

<template>
	<div class="w-100 h-100 bg-black text-body d-flex flex-column" data-bs-theme="dark">
		<div class="row my-auto">
			<div class="col-sm">
				<div class="p-2 text-center">
					<h3>Welcome to</h3>
					<h1 class="display-5 fw-bold">Circuit Construction Kit: AC</h1>
				</div>
			</div>
			<div class="col-sm">
				<div class="p-2">
					<div class="d-flex gap-4 signInSwitches">
						<h4 class="py-2" :class="{active: this.mode === 'signin'}">
							<a role="button">Sign In</a>
						</h4>
						<h4  class="py-2" :class="{active: this.mode === 'signup'}">
							<a role="button">Sign Up</a>
						</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.signInSwitches h4.active{
		border-bottom: 3px solid #ffffff;
	}
</style>