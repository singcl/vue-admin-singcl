<template>
<aside class="aside">
    <div v-for="(option,number) in $router.options.routes" v-if="!option.hidden">
    <el-menu 
        :default-active="$route.path" 
        @open="handleopen" 
        @close="handleclose" 
        @select="handleselect"
        theme="dark" 
        unique-opened 
        router>
        <template
            v-for="(item,index) in option.children" 
            v-if="!item.hidden">
            <el-submenu 
                :index="index+''" 
                v-if="!item.leaf">
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    {{item.name}}
                </template>
                <el-menu-item 
                    v-for="child in item.children" 
                    :index="child.path" 
                    v-if="!child.hidden">
                        {{child.name}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item 
                v-if="item.leaf&&item.children.length>0" 
                :index="item.children[0].path">
                    <i :class="item.iconCls"></i>
                    {{item.children[0].name}}
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
  methods: {
    handleopen() {
        //console.log('handleopen');
    },
    handleclose() {
        //console.log('handleclose');
    },
    handleselect: function (a, b) {
    }
  },
};
</script>

<style lang="less" scoped>
    .aside {
        width: 230px;
    }
</style>