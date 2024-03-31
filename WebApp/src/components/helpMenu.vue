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
					name: "Wire",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Battery",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "AC Voltage",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Light Bulb",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Resistor",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Switch",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Fuse",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
				},
				{
					name: "Coin",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci sit amet tortor rhoncus, ut mattis nulla ullamcorper. Ut consectetur molestie leo, nec porttitor ligula. Duis tincidunt gravida libero eu iaculis. Nam pretium enim eget rutrum tincidunt. Suspendisse sit amet maximus lorem. Aenean porttitor, lacus vitae tempor fringilla, felis arcu laoreet tortor, ultricies dignissim ipsum ante condimentum urna. Etiam convallis sodales neque, sit amet consectetur nulla blandit vitae. Nullam accumsan non sem et fringilla. Donec eu ligula est. Duis dictum, risus vel accumsan feugiat, ante erat efficitur nunc, et suscipit tellus libero ut dui."
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