<template>
<el-col :span="24" class="panel-center">
	<home-left-aside></home-left-aside>
	<home-right-detail></home-right-detail>
</el-col>
</template>

<script>
import HomeLeftAside from './dashboard-v1/left-aside'
import HomeRightDetail from './dashboard-v1/right-detail'

export default {

  name: 'dashboard-v1',

  data () {
    return {

    };
  },
  components: {
  	HomeLeftAside,
  	HomeRightDetail
  }
};
</script>

<style lang="less" scoped>
	.panel-center {
		background: #3b3f46;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
</style>