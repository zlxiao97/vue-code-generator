import { fetchSecureList, fetchSecureDetail, editSecure, createSecure } from '@/api/vpx/secure'
export default {
  state: {
    secureList: [],
    secureDetail: {}
  },
  mutations: {
    updateSecureList(state, secureList) {
      state.secureList = secureList
    },
    updateSecureDetail(state, secureDetail) {
      state.secureDetail = secureDetail
    }
  },
  actions: {
    getSecureList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchSecureList(params)
          .then(response => {
            commit('updateSecureList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getSecureDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchSecureDetail(params)
          .then(response => {
            commit('updateSecureDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editSecure(param)
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
        createSecure(param)
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
