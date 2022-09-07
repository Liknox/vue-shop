<template>
	<div class="item">
		<router-link class="link" :to="/shop/ + product.id">
			<img :src="product.img" :alt="product.title" />
			{{ product.title }}
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss">

.link {
   border-bottom: none !important;
}
.item__wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}
.item {
	max-width: 48%;
	text-align: center;
	p {
		font-size: 22px;
	}
}

@media (max-width: 575px) {
   .item {
        max-width: 100%;
        margin-bottom: 15px;
      }
}

</style>
