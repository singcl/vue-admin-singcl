<template>
	<el-row class="panel">
		<!-- <nprogress-container></nprogress-container> -->
	    <home-header></home-header>
	    <home-aside-menu></home-aside-menu>
	    <home-main></home-main>
	    <!-- <footer-bar></footer-bar> -->
	</el-row>
</template>

<script>
	import HomeHeader from './home/header'
	import HomeAsideMenu from './home//menu'
	import HomeMain from './home/main'

	export default {
		data() {
			return {
				//
			}
		},
		
		components: {
			HomeHeader,
		    HomeAsideMenu,
		    HomeMain
		}
	}

</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
</style>