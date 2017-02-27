<template>
<el-col :span="24" class="home-header">
	<el-col :span="6" class="home-header__logo">
		<span class="logo-img"></span>
		<span class="logo-text">
			<span>AD</span>
			<i class="logo-text__af logo-text__af--color">MIN</i>
		</span>
	</el-col>
	<el-col :span="18" class="home-header__nav">
		<!-- email -->
		<el-badge :value="12" :max="99" is-dot class="nav-task">
			<i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
		</el-badge>
		<!-- email -->
		<!-- notification -->
		<el-badge :value="12" :max="99" class="nav-task">
			<i class="fa fa-bell fa-lg" aria-hidden="true"></i>
		</el-badge>
		<!-- /notification -->

		<!-- Task item -->
		<el-badge :value="200" :max="99" class="nav-task">
			<i class="fa fa-flag fa-lg " aria-hidden="true"></i>
		</el-badge>
		<!-- /Task item -->

		<!-- User Account Menu -->
		<el-dropdown trigger="click" class="nav-account">
			<span class="el-dropdown-link nav-user nav-user--color">
				<img :src="this.sysUserAvatar" class="nav-user__avatar">
				<span class="nav-user__name">{{sysUserName}}</span>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>我的消息</el-dropdown-item>
				<el-dropdown-item>设置</el-dropdown-item>
				<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<!-- /User Account Menu -->
	</el-col>
</el-col>
</template>

<script>
export default {

  name: 'home-header',

  data () {
    return {
    	sysUserName: '',
		sysUserAvatar: '',
    };
  },
   methods: {
   	 //退出登录
	logout: function () {
		this.$confirm('确认退出吗?', '提示', {
			//type: 'warning'
		}).then(() => {
			sessionStorage.removeItem('user');
			this.$router.push('/login');
		}).catch(() => {

		});
	}
   },
	mounted() {
		var user = sessionStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysUserAvatar = user.avatar || '';
		}
	}
};
</script>

<style lang="less" scoped>
    .home-header {
    	position: fixed;
    	top: 0;
		height: 60px;
		background: #2d3034;
		color: #c0ccda;
		z-index: 10;
		&__nav {
			text-align: right;
		    padding-right: 35px;
		}

		&__logo {
			font-size: 25px;
		}
	}

	.logo-img {
		width: 40px;
		height: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
		background: url(~assets/logo4.png) center no-repeat;
		background-size: cover;
	}

	.logo-text {
		line-height: 60px;
		&__af {
			&--color {
				color: #20a0ff;
			}
		}
	}

	.nav-account {
		margin-left: 50px;
	}

	.nav-user {
		cursor: pointer;
		&--color {
			color: #c0ccda;
		}
		&__avatar {
	    	width: 40px;
			height: 40px;
			border-radius: 20px;
			margin: 10px 0px 10px 10px;
			float: right;
		}
		&__name {
			line-height: 60px;
		}
	}

	.nav-task {
		margin-right: 30px;
	}
</style>