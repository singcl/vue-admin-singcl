<template>
	<el-row class="panel">
		<home-header></home-header>
		<router-view></router-view>
	</el-row>
</template>

<script>
	import HomeHeader from './home/home-header'

	export default {
		data() {
			return {
				//
			}
		},
		
		components: {
			HomeHeader
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