<template>
<el-col :span="24" class="panel-center">
	<home-aside-menu></home-aside-menu>
	<home-main></home-main>
</el-col>
</template>

<script>
import HomeAsideMenu from './dashboard-v1/menu'
import HomeMain from './dashboard-v1/main'

export default {

  name: 'dashboard-v1',

  data () {
    return {

    };
  },
  components: {
  	HomeAsideMenu,
  	HomeMain
  }
};
</script>

<style lang="less" scoped>
	.panel-center {
		background: #f2f4f7;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
</style>