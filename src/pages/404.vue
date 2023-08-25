<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title">PAGE NOT FOUND!</h1>
				<p>Go back to the <router-link class="link" to="/">shop page</router-link>?</p>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.wrapper-content {
	min-height: 80vh;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	.title {
		margin-bottom: 0;
	}
}

.link {
   text-decoration: underline;
   &:hover {
      color: blue;
   }
}
</style>
