<template>
<section class="detail-c">
	<el-col :span="24" class="dtail-c__nav">
		<strong class="nav-name">{{$route.name}}</strong>
		<el-breadcrumb separator="/" class="nav-path">
			<el-breadcrumb-item class="nav-path__item" v-for="item in $route.matched">
				{{ item.name }}
			</el-breadcrumb-item>
		</el-breadcrumb>
	</el-col>
	<el-col :span="24" class="detail-c__c">
		<!--<transition name="fade">-->
		<router-view></router-view>
		<!--</transition>-->
	</el-col>
</section>
</template>

<script>
export default {

  name: 'main',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.detail-c {
		background: #f1f2f7;
		position: absolute;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 230px;
		overflow-y: scroll;
		padding: 20px;
		
		&__nav {
			margin-bottom:15px;
		}
		&__c {
			background-color:#fff;
			box-sizing: border-box;
		}
	}

	.nav-name {
		width:200px;
		float:left;
		color: #475669;
	}

	.nav-path {
		float:right;
		&__item {
			//
		}
	}
</style>