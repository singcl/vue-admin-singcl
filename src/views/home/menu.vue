<template>
<aside class="aside">
    <div v-for="(option,number) in $router.options.routes" v-if="option.meta.show">
    <el-menu 
        :default-active="$route.path" 
        @open="handleopen" 
        @close="handleclose" 
        @select="changeMenu"
        theme="light" 
        unique-opened 
        >
        <template
            v-for="(item,index) in option.children" 
            v-if="!item.meta.hidden">
            <el-submenu 
                :index="index+''" 
                v-if="item.children"
                >
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    {{item.name | chineseMenu}}
                </template>
                <el-menu-item 
                    v-for="child in item.children" 
                    :index="child.name" 
                    >
                        {{child.name | chineseMenu}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item 
                v-if="!item.children" 
                :index="item.name">
                    {{item.name | chineseMenu}}
            </el-menu-item>
        </template>
    </el-menu>
    </div>
</aside>
</template>

<script>
export default {

  name: 'menu',

  data () {
    return {

    };
  },
  computed: {
    //
  },
  methods: {
    handleopen() {
       //alert(1)
    },
    handleclose() {
        //console.log('handleclose');
    },
    changeMenu: function (index) {
        this.$router.push({name: index});
    }
  },
};
</script>

<style lang="less" scoped>
    .aside {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 60px;
        width: 230px;
        min-height: 100%;
        background-color: #eaf1f1;
        box-sizing: border-box;
    }
</style>