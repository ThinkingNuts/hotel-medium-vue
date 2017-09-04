<template>
  <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data() {
    return {
      'permission_routers': '',
    }
  },
  computed: {
    isCollapse() {
      return !this.sidebar.opened
    },
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>
