<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="product__wrapper">
					<div class="product__slider">
						<swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
							<swiper-slide v-for="(slide, index) in product.gallery" :key="index">
								<img :src="slide.img" :alt="slide.name" />
							</swiper-slide>
						</swiper>
					</div>

					<div class="product__content">
						<h1 class="title">{{ product.title }}</h1>
						<p>{{ product.descr }}</p>
						<router-link class="btn btnWhite mb" to="/">Back To Shop</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const onSwiper = () => {}
		const onSlideChange = () => {}
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],
		}
	},
	data() {
		return {
			product: null,
		}
	},
	created() {
		let id = this.$route.params.id
		this.product = this.$store.getters.getProduct(id)
	},
}
</script>

<style lang="scss">
.product__wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.product__content,
.product__slider {
	max-width: 48%;
	text-align: center;
}
.title {
	margin-bottom: 10px !important;
}

.mb {
	margin-top: 15px;
}

@media (max-width: 575px) {
	.product__wrapper {
		flex-wrap: wrap;
	}
	.product__content,
	.product__slider {
		max-width: 100%;
	}
	.product__content {
		margin-top: 20px;
	}
}
</style>
