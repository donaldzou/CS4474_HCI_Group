<script>
export default {
	name: "navbar"
}
</script>

<template>
	<nav class="navbar py-3">
		<div class="container-fluid">
			<div class="d-flex gap-2 w-100">
				<button class="btn btn-primary circuitNavBtn active">
					Untitled Circuit
				</button>

				<button class="btn btn-secondary circuitNavBtn">
					Untitled Circuit
				</button>
				<button class="btn btn-secondary">
					<i class="bi bi-plus"></i>
				</button>
				<div class="ms-auto d-flex align-items-center gap-3">
					<a class="nav-link fw-bold">
						Need Help? <i class=" ms-2 bi bi-search"></i>
					</a>
					<div class="btn-group btnShareGroup" role="group" aria-label="Basic outlined example">
						<button type="button" class="btn btn-primary"><i class="bi bi-send me-2"></i>Share</button>
						<button type="button" class="btn btn-outline-primary">
							<i class="bi bi-link-45deg"></i>
						</button>
					</div>
					<div class="btn btn-outline-secondary p-0 d-flex" style="border-radius: 50%; height: 100%; width: 38px;">
						<span class="m-auto">DZ</span>
					</div>
				</div>
			</div>
		</div>
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
</style>