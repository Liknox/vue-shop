<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="demo">
			<div class="demo-content">
				<div class="container">
					<h2 class="title">In this App:</h2>
					<ul class="ul-line">
						<li>Working with Vue-Router</li>
						<li>Creating dynamic routes</li>
						<li>Store and interact with data form Vuex</li>
						<li>Diff btw actions and mutations</li>
						<li>Working with the common state application</li>
						<li>My<a class="github" href="https://github.com/Liknox" target="_blank"> Github </a>account</li>
					</ul>
					<img src="../assets/img/1.png" alt="" />
					<div>
						<router-link class="btn btnPrimary mb" to="/">To the Shop</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.demo {
	margin: 0 auto;
	font-size: 1.2rem;
	width: 100%;
	h2 {
		font-size: 1.6rem;
		padding-bottom: 0.66rem;
		text-align: center;
	}
	div {
		text-align: center;
	}
	.mb {
		margin-top: 30px;
	}
	&-content {
		padding: 40px 0;
		background-color: #fff;
	}
	.ul-line li {
		text-align: left;
		position: relative;
		list-style: none;
		display: flex;
		padding-left: 0.625rem;
	}
	.ul-line li::before {
		content: "\2013";
		display: block;
		margin-right: 0.625rem;
	}
	.github {
		padding: 0 5px;
		color: #494ce8;
		font-weight: bold;
	}
}
@media (max-width: 400px) {
	.mb {
		margin-top: 10px !important;
	}
}
</style>
