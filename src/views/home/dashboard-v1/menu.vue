<template>
<aside class="aside">
    <div v-for="(option,number) in $router.options.routes" v-if="!option.hidden">
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
            v-if="!item.hidden">
            <el-submenu 
                :index="index+''" 
                v-if="!item.leaf">
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    {{item.name | chineseMenu}}
                </template>
                <el-menu-item 
                    v-for="child in item.children" 
                    :index="child.name" 
                    v-if="!child.hidden">
                        {{child.name | chineseMenu}}
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
    changeMenu: function (index, arr) {
        this.$router.push({path: arr[1]});
    }
  },
};
</script>

<style lang="less" scoped>
    .aside {
        width: 230px;
    }
</style>