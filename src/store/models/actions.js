import { getDeviceTypoModels, filterModelDevice, uploadImg } from '../../api/apiCalls'

export function showAll ({ commit, dispatch }) {
  return new Promise((resolve, reject) => {
    return getDeviceTypoModels((response) => {
      commit('setModelsByType', response)
      resolve(response)
    }, (err) => {
      if (err.status === 401) {
        console.log(err)
      }
    })
  })
}

export function filterModel ({ commit, dispatch }, ids) {
  return new Promise((resolve, reject) => {
    return filterModelDevice(ids, (response) => {
      commit('setModelFilter', response)
      resolve(response)
    }, (err) => {
      if (err.status === 401) {
        console.log(err)
      }
    })
  })
}

export function uploadImage ({ commit, dispatch }, data) {
  return new Promise((resolve, reject) => {
    return uploadImg(data, (response) => {
      commit('pushImageUser', response.data)
      resolve(response)
    }, (err) => {
      console.log(err)
    })
  })
}

export function setImgDrawing ({ commit, dispatch }, node) {
  return new Promise((resolve, reject) => {
    commit('setTheDrawingImg', node)
  })
}

export function updateModelEdit ({ commit, dispatch }, id) {
  return new Promise((resolve, reject) => {
    commit('setTheModelEdit', id)
  })
}

export function updateFormatEdit ({ commit, dispatch }, id) {
  return new Promise((resolve, reject) => {
    commit('setTheFormatEdit', id)
  })
}
