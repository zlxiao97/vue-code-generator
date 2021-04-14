const fs = require("fs");
const route = require("./route");
const mockData = require("./mockData");

fs.mkdir(`${__dirname}/dist/api`, { recursive: true }, console.error);

const temp = `
// 模块名：Title
const mockList = [
  {
    id: 1,
    name: '记事本',
    description: '说明',
    source: '描述',
    status: '状态'
  }
]

const mockDetail = {
  a: 'xxx',
  b: 'xxx'
}

const mockEditSuccess = {
  success: true,
  message: '编辑成功！'
}

const mockCreateSuccess = {
  success: true,
  message: '新增成功！'
}

export function fetchXXXList(params) {
  return new Promise(resolve => {
    resolve(mockList)
  })
}

export function fetchXXXDetail(params) {
  return new Promise(resolve => {
    resolve(mockDetail)
  })
}

export function editXXX(params) {
  return new Promise(resolve => {
    resolve(mockEditSuccess)
  })
}

export function createXXX(params) {
  return new Promise(resolve => {
    resolve(mockCreateSuccess)
  })
}

`;

const allModules = route.children;

const getFileContent = (name, title, list, detail) => {
  const moduleName = String(name.split("")[0]).toUpperCase() + name.slice(1);
  return `
    // 模块名：${title}
    const mockList = ${JSON.stringify(
      list.map((item, index) => ({ id: index + 1, ...item }))
    )}

    const mockDetail = ${JSON.stringify(detail)}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetch${moduleName}List(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetch${moduleName}Detail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function edit${moduleName}(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function create${moduleName}(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    `;
};
allModules.forEach(({ name, meta: { title }, hidden }) => {
  if (!hidden) {
    const content = getFileContent(
      name,
      title,
      mockData[name].list,
      mockData[name].detail
    );
    fs.writeFile(`${__dirname}/dist/api/${name}.js`, content, console.error);
  }
});
