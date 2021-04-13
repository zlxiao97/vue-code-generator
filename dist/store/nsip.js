import { fetchNsipList, fetchNsipDetail, editNsip, createNsip } from '@/api/vpx/nsip'
export default {
  state: {
    nsipList: [],
    nsipDetail: {}
  },
  mutations: {
    updateNsipList(state, nsipList) {
      state.nsipList = nsipList
    },
    updateNsipDetail(state, nsipDetail) {
      state.nsipDetail = nsipDetail
    }
  },
  actions: {
    getNsipList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchNsipList(params)
          .then(response => {
            commit('updateNsipList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getNsipDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchNsipDetail(params)
          .then(response => {
            commit('updateNsipDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editNsip(param)
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
        createNsip(param)
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
