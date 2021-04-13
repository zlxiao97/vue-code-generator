import { fetchThemList, fetchThemDetail, editThem, createThem } from '@/api/vpx/them'
export default {
  state: {
    themList: [],
    themDetail: {}
  },
  mutations: {
    updateThemList(state, themList) {
      state.themList = themList
    },
    updateThemDetail(state, themDetail) {
      state.themDetail = themDetail
    }
  },
  actions: {
    getThemList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchThemList(params)
          .then(response => {
            commit('updateThemList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getThemDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchThemDetail(params)
          .then(response => {
            commit('updateThemDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editThem(param)
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
        createThem(param)
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
