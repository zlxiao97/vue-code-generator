import { fetchAuthList, fetchAuthDetail, editAuth, createAuth } from '@/api/vpx/auth'
export default {
  state: {
    authList: [],
    authDetail: {}
  },
  mutations: {
    updateAuthList(state, authList) {
      state.authList = authList
    },
    updateAuthDetail(state, authDetail) {
      state.authDetail = authDetail
    }
  },
  actions: {
    getAuthList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchAuthList(params)
          .then(response => {
            commit('updateAuthList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getAuthDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchAuthDetail(params)
          .then(response => {
            commit('updateAuthDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postAuthUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editAuth(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postAuthCreate({ commit }, param) {
      return new Promise((resolve, reject) => {
        createAuth(param)
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
