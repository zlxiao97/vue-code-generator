import { fetchSystemList, fetchSystemDetail, editSystem, createSystem } from '@/api/vpx/system'
export default {
  state: {
    systemList: [],
    systemDetail: {}
  },
  mutations: {
    updateSystemList(state, systemList) {
      state.systemList = systemList
    },
    updateSystemDetail(state, systemDetail) {
      state.systemDetail = systemDetail
    }
  },
  actions: {
    getSystemList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchSystemList(params)
          .then(response => {
            commit('updateSystemList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getSystemDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchSystemDetail(params)
          .then(response => {
            commit('updateSystemDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postSystemUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editSystem(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postSystemCreate({ commit }, param) {
      return new Promise((resolve, reject) => {
        createSystem(param)
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
