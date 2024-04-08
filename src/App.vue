<script setup>
import Navbar from "@/components/navbar.vue";
import {supabase} from "@/supabase.js";
import {useRouter} from "vue-router";
import {useSimulatorStore} from "@/store/simulatorStore.js";

const store = useSimulatorStore();
const router = useRouter()

const { data } = supabase.auth.onAuthStateChange(
	(event, session) => {
		if (event === 'SIGNED_IN') {
			store.signedIn = true;
		} else if (event === 'SIGNED_OUT') {
			store.signedIn = false;
		}
	})
</script>

<template>
	<Suspense>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</Suspense>
</template>

<style scoped>

</style>
