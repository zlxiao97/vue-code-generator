const fs = require("fs");
const route = require("./route");
const mockData = require("./mockData");

fs.mkdirSync(`${__dirname}/dist/editForm`, { recursive: true });

const temp = `<template>
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
      initialValues: state => state.xxx.xxxDetail,
      options: state => ({})
    })
  },
  methods: {
    ...mapActions(['getXXXDetail', 'postXXXUpdate']),
    onSubmit: function(values) {
      this.postXXXUpdate(values).then(res => {
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
    this.getXXXDetail()
  }
}
</script>

<style lang="less" scoped>
.form-container /deep/ .ant-form-item {
  margin-left: 10%;
  width: 30%;
}
</style>
`;
const columnsTemp = `export default [
    {
      type: 'TextInput',
      label: 'xxx',
      name: 'xxx',
      rules: [
        {
          required: true,
          message: '请输入xxx'
        }
      ],
      placeholder: '',
      dcColSpan: 3
    }
    // {
    //   type: 'BasicCheckBox',
    //   label: '',
    //   name: 'text3',
    //   placeholder: '',
    //   dcColSpan: 3,
    //   dcOptions: [
    //     {
    //       label: '修改管理员密码',
    //       value: ''
    //     }
    //   ]
    // }
  ]
`;
const allModules = route.children;

const getFileContent = (name) => {
  const moduleName = String(name.split("")[0]).toUpperCase() + name.slice(1);
  return `<template>
  <page-header-wrapper content="" :breadcrumb="false">
    <a-card class="card" title="" :bordered="false">
      <!-- 这是一个高级表单组件 -->
      <dc-advanced-form
        name="form1"
        :fields="fields"
        :initialValues="initialValues"
        :options="options"
        :refillValues="refillValues"
        @submit="onSubmit"
        @cancel="onCancel"
        @formItemValueChange="onFormItemValueChange"
      />
    </a-card>
    <!-- 以下内容是必要的 -->
    <portal-target name="advancedForm" />
  </page-header-wrapper>
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
      initialValues: state => state.${name}.${name}Detail,
      options: state => ({})
    })
  },
  methods: {
    ...mapActions(['get${moduleName}Detail', 'post${moduleName}Update']),
    onSubmit: function(values) {
      this.post${moduleName}Update(values).then(res => {
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
    onCancel() {
      this.$router.back()
    }
  },
  created() {
    this.get${moduleName}Detail()
  }
}
</script>

<style lang="less" scoped>
</style>
`;
};

const getFields = (name) => {
  const detail = mockData[name]?.detail || {};
  const items = JSON.stringify(
    Object.keys(detail).map((key) => ({
      type: "TextInput",
      label: key,
      name: key,
      rules: [
        {
          required: true,
          message: `请输入${key}`
        }
      ],
      placeholder: "请输入",
      dcColSpan: 3
    }))
  )
    .split("")
    .slice(1, -1)
    .join("");
  const fields = items.length ? items + "," : "";
  return `export default [
        ${fields}
        // {
        //   type: 'BasicCheckBox',
        //   label: '',
        //   name: 'text3',
        //   placeholder: '',
        //   dcColSpan: 3,
        //   dcOptions: [
        //     {
        //       label: '修改管理员密码',
        //       value: ''
        //     }
        //   ]
        // }
      ]
    `;
};

allModules.forEach(({ name, meta: { parentName } }) => {
  // if (name.split("_").slice(-1).join("") === "edit") {
  const content = getFileContent(name);
  const fields = getFields(name);
  fs.mkdirSync(`${__dirname}/dist/editForm/${name}`, { recursive: true });
  fs.mkdirSync(`${__dirname}/dist/editForm/${name}/config`, {
    recursive: true
  });
  fs.writeFile(
    `${__dirname}/dist/editForm/${name}/index.vue`,
    content,
    console.error
  );
  fs.writeFile(
    `${__dirname}/dist/editForm/${name}/config/fieldsDef.js`,
    fields,
    console.error
  );
  // }
});
