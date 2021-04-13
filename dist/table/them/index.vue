<template>
  <div class="dir">
    <div class="box">
      <dc-advanced-table :columns="column" @actionDispatched="onActionDispatched" :data="list" rowKey="id">
        <template slot="actionBar">
          <a-button type="primary" icon="plus" @click="handleCreate">新增主题</a-button>
        </template>
      </dc-advanced-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { DcAdvancedTable } from '@/components'
import column from './config/columns'
export default {
  components: {
    DcAdvancedTable
  },
  data() {
    return {
      column
    }
  },
  computed: {
    ...mapState({
      themList: state => state.them.themList
    }),
    list() {
      return {
        list: this?.themList || []
      }
    }
  },
  methods: {
    ...mapActions(['getThemList']),
    onActionDispatched({ title, record }) {
      if (title === '编辑') {
        this.$router.push({ path: '' })
      } else if (title === '复制') {
        this.$router.push({ path: '' })
      } else if (title === '删除') {
        this.$router.push({ path: '' })
      }
    },
    handleCreate() {
      this.$router.push({ path: '' })
    }
  },
  mounted() {
    this.getThemList()
  }
}
</script>

<style lang="less" scoped>
.dir {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .box {
    width: 87vw;
    margin-bottom: 16px;
    height: fit-content;
    h1 {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

