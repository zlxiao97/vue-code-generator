const fs = require("fs");
const route = require("./route");
const mockData = require("./mockData");

fs.mkdirSync(`${__dirname}/dist/table`, { recursive: true });

const temp = `<template>
  <div class="dir">
    <div class="box">
      <dc-advanced-table :columns="column" @actionDispatched="onActionDispatched" :data="list" rowKey="id">
        <template slot="actionBar">
          <a-button type="primary" icon="plus" @click="handleCreate">新增身份验证服务器</a-button>
        </template>
      </dc-advanced-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { DcAdvancedTable } from '@/components'
import column from './config/column'
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
      xxxList: state => state.xxx.xxxList
    }),
    list() {
      return {
        list: this?.xxxList || []
      }
    }
  },
  methods: {
    ...mapActions(['getXXXList']),
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
    this.getXXXList()
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
`;

const columnsTemp = `export default [
  {
    type: 'TextInput',
    title: '目录名称',
    dataIndex: 'name'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' },
    dcActionTypes: [
      {
        title: '详情',
        type: 'detaile'
      }
    ]
  }
]
`;

const allModules = route.children;

const BtnText = {
  nsip: "",
  auth: "新增身份验证服务器",
  route: "新增路由",
  certificate: "安装证书",
  system: "保存为文件",
  them: "新增主题",
  secure: "新增策略",
};

const getFileContent = (name, createBtnText) => {
  const moduleName = String(name.split("")[0]).toUpperCase() + name.slice(1);
  return `<template>
  <div class="dir">
    <div class="box">
      <dc-advanced-table :columns="column" @actionDispatched="onActionDispatched" :data="list" rowKey="id">
        <template slot="actionBar">
          <a-button type="primary" icon="plus" @click="handleCreate">${createBtnText}</a-button>
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
      ${name}List: state => state.${name}.${name}List
    }),
    list() {
      return {
        list: this?.${name}List || []
      }
    }
  },
  methods: {
    ...mapActions(['get${moduleName}List']),
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
    this.get${moduleName}List()
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

`;
};

const getColumns = (name) => {
  const list = mockData[name]?.list || [];
  const item = list[0] || {};
  const elements = String(
    JSON.stringify(
      Object.keys(item).map((key) => ({
        type: "TextInput",
        title: key,
        dataIndex: key,
      }))
    )
  )
    .split("")
    .slice(1, -1)
    .join("");
  const fields = elements.length ? elements + "," : "";
  return `export default [
    ${fields}
    {
      title: '操作',
      dataIndex: 'action',
      width: '150px',
      scopedSlots: { customRender: 'action' },
      dcActionTypes: [
        {
          title: '详情',
          type: 'detaile'
        }
      ]
    }
  ]
  `;
};
allModules.forEach(({ name, hidden }) => {
  if (!hidden) {
    const content = getFileContent(name, BtnText[name]);
    const columns = getColumns(name);
    fs.mkdirSync(`${__dirname}/dist/table/${name}`, { recursive: true });
    fs.mkdirSync(`${__dirname}/dist/table/${name}/config`, { recursive: true });
    fs.writeFile(
      `${__dirname}/dist/table/${name}/index.vue`,
      content,
      console.error
    );
    fs.writeFile(
      `${__dirname}/dist/table/${name}/config/columns.js`,
      columns,
      console.error
    );
  }
});
