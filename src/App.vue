<template>
	<div class="wrapper">
		<header class="navbar">
			<div class="container">
				<div class="navbar-content">
					<div><router-link to="/">Shop App</router-link></div>
					<ul class="navbar-list">
						<li class="navbar-item" v-for="link in links" :key="link.title">
							<router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ title: "Shop", url: "/" },
				{ title: "Home", url: "/home" },
			],
		}
	},
}
</script>

<style lang="scss">
.navbar-link {
	&.router-link-exact-active {
		color: #5247e7;
      font-weight: 700;
	}
}
</style>
