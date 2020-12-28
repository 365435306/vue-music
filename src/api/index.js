import base from './base'
import axios from '../utils/request'

const api = {
  getMusicData(params){
    return axios.get(base.baseURL + base.musicPath,{
      params
    })
  },
  getMusicLRC(params){
    return axios.get(base.baseURL + base.musicPath,{
      params
    })
  },
  getMusicPlayer(params){
    return axios.get(base.baseURL + base.musicPath,{
      params
    })
  }
}

export default api