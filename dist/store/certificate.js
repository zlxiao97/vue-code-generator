import { fetchCertificateList, fetchCertificateDetail, editCertificate, createCertificate } from '@/api/vpx/certificate'
export default {
  state: {
    certificateList: [],
    certificateDetail: {}
  },
  mutations: {
    updateCertificateList(state, certificateList) {
      state.certificateList = certificateList
    },
    updateCertificateDetail(state, certificateDetail) {
      state.certificateDetail = certificateDetail
    }
  },
  actions: {
    getCertificateList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchCertificateList(params)
          .then(response => {
            commit('updateCertificateList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCertificateDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchCertificateDetail(params)
          .then(response => {
            commit('updateCertificateDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editCertificate(param)
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
        createCertificate(param)
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
