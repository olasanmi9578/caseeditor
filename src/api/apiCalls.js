import axios from 'axios'
import { domain } from './data'

let url = domain

export function getDeviceTypoModels (callBack, errorCallBack) {
  return axios({ url: url + '/api/models', method: 'GET' })
    .then(response => {
      callBack(response)
    })
    .catch(err => {
      errorCallBack(err)
    })
}

export function filterModelDevice (iddds, callBack, errorCallBack) {
  return axios({ url: url + '/api/models/' + iddds, method: 'GET' })
    .then(response => {
      callBack(response)
    })
    .catch(err => {
      errorCallBack(err)
    })
}

export function uploadImg (data, callBack, errorCallBack) {
  return axios({ url: url + '/api/uploader', data, headers: { 'Content-Type': 'multipart/form-data' }, method: 'POST' })
    .then(response => {
      callBack(response)
    })
    .catch(err => {
      errorCallBack(err)
    })
}
