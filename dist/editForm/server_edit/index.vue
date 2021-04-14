<template>
  <div class="form-container">
    <a-card class="card" title="" :bordered="false">
      <!-- 这是一个高级表单组件 -->
      <dc-advanced-form
        name="form1"
        :fields="fields"
        :initialValues="initialValues"
        :options="options"
        :refillValues="refillValues"
        @submit="onSubmit"
        @cancle="onCancle"
        @formItemValueChange="onFormItemValueChange"
      />
    </a-card>
    <!-- 以下内容是必要的 -->
    <portal-target name="advancedForm" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { DcAdvancedForm } from '@/components'
import fieldsDef from './config/fieldsDef'
const fields = fieldsDef
export default {
  components: {
    DcAdvancedForm
  },
  data() {
    return {
      fields,
      refillValues: {}
    }
  },
  computed: {
    ...mapState({
      initialValues: state => state.auth.authDetail,
      options: state => ({})
    })
  },
  methods: {
    ...mapActions(['getAuthDetail', 'postAuthUpdate']),
    onSubmit: function(values) {
      this.postAuthUpdate(values).then(res => {
        if (res.success) {
          this.$router.back()
          this.$message.success(res.message)
        } else {
          this.$message.error('编辑失败！' + res.message)
        }
      })
    },
    onFormItemValueChange(payload) {
      console.log('onFormItemValueChange', payload)
    },
    onCancle() {
      this.$router.back()
    }
  },
  created() {
    this.getAuthDetail()
  }
}
</script>

<style lang="less" scoped>
.form-container /deep/ .ant-form-item {
  margin-left: 10%;
  width: 30%;
}
</style>
