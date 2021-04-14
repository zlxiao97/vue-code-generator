const fs = require("fs");
const route = require("./route");

fs.mkdir(`${__dirname}/dist/store`, { recursive: true }, console.error);

const temp = `
import { fetchXXXList, fetchXXXDetail, editXXX, createXXX } from '@/api/vpx/XXX'

export default {
  state: {
    XXXList: [],
    XXXDetail: {}
  },
  mutations: {
    updateXXXList(state, XXXList) {
      state.XXXList = XXXList
    },
    updateXXXDetail(state, XXXDetail) {
      state.XXXDetail = XXXDetail
    }
  },
  actions: {
    getXXXList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchXXXList(params)
          .then(response => {
            commit('updateXXXList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getXXXDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchXXXDetail(params)
          .then(response => {
            commit('updateXXXDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editXXX(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postCreate({ commit }, param) {
      return new Promise((resolve, reject) => {
        createXXX(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
`;

const allModules = route.children;

const getFileContent = (name) => {
  const moduleName = String(name.split("")[0]).toUpperCase() + name.slice(1);
  return `import { fetch${moduleName}List, fetch${moduleName}Detail, edit${moduleName}, create${moduleName} } from '@/api/vpx/${name}'
export default {
  state: {
    ${name}List: [],
    ${name}Detail: {}
  },
  mutations: {
    update${moduleName}List(state, ${name}List) {
      state.${name}List = ${name}List
    },
    update${moduleName}Detail(state, ${name}Detail) {
      state.${name}Detail = ${name}Detail
    }
  },
  actions: {
    get${moduleName}List({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetch${moduleName}List(params)
          .then(response => {
            commit('update${moduleName}List', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    get${moduleName}Detail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetch${moduleName}Detail(params)
          .then(response => {
            commit('update${moduleName}Detail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    post${moduleName}Update({ commit }, param) {
      return new Promise((resolve, reject) => {
        edit${moduleName}(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    post${moduleName}Create({ commit }, param) {
      return new Promise((resolve, reject) => {
        create${moduleName}(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
`;
};
allModules.forEach(({ name, hidden }) => {
  if (!hidden) {
    const content = getFileContent(name);
    fs.writeFile(`${__dirname}/dist/store/${name}.js`, content, console.error);
    console.log(name);
    // console.log(`import ${name} from './modules/vpx/${name}'`);
  }
});
