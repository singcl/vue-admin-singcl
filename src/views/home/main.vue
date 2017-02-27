<template>
    <section class="detail-c">
        <el-col :span="24" class="detail-c__nav">
            <strong class="nav-name">{{$route.name | chineseMenu}}</strong>
            <el-breadcrumb separator="/" class="nav-path">
                <el-breadcrumb-item class="nav-path__item" v-for="item in $route.matched">
                    {{ item.name | chineseMenu }}
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

    data() {
        return {
            bread: []
        };
    },
    components: {
        //
    }
};
</script>
<style lang="less" scoped>
.detail-c {
    //display: block;
    position: relative;
    margin-left: 230px;
    padding:80px 20px 20px;
    height: 100%;
    overflow: auto;
    background: #f1f2f7;
    box-sizing: border-box;
    &__nav {
        margin-bottom: 15px;
    }
    &__c {
        background-color: #fff;
        box-sizing: border-box;
    }

    &:after {
    	display: block;
    	content: "";
    	clear: both;
    }
}

.nav-name {
    width: 200px;
    float: left;
    color: #475669;
}

.nav-path {
    float: right;
    &__item {
        //
    }
}
</style>
