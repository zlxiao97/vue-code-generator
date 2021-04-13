import { fetchRouteList, fetchRouteDetail, editRoute, createRoute } from '@/api/vpx/route'
export default {
  state: {
    routeList: [],
    routeDetail: {}
  },
  mutations: {
    updateRouteList(state, routeList) {
      state.routeList = routeList
    },
    updateRouteDetail(state, routeDetail) {
      state.routeDetail = routeDetail
    }
  },
  actions: {
    getRouteList({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchRouteList(params)
          .then(response => {
            commit('updateRouteList', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getRouteDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetchRouteDetail(params)
          .then(response => {
            commit('updateRouteDetail', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postUpdate({ commit }, param) {
      return new Promise((resolve, reject) => {
        editRoute(param)
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
        createRoute(param)
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
