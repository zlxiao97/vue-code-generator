# vue-code-generator

基于 [std-vue-v2](https://github.com/digitial-china-wuhan-frontend/std-vue-v2) 的代码生成器，可以根据路由对象中页面的`name`以及以该`name`为`key`的 mockData 对象，生成可以正确引用文件、正确调用 api、正确派发 Action 的数据层、状态层、渲染层文件，以减少重复劳动。

支持生成的内容：

- API 层
- Store 层
- Table 页
- 编辑型 Form 页

代码生成依据：

- route.js（路由对象列表）
- mockData.js（mock 数据，包含 list、detai）

生成命令：

```
// 生成API文件
node apiGenerator
// 生成store文件
node storeGenerator
// 生成Table页
node tableGenerator
// 生成编辑类Form页面
node editFormGenerator

```

生成结果路径：

```
/dist/api/
/dist/store/
/dist/table/
/dist/editForm/
```
