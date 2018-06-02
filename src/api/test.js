import {commonParams} from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getDiscList () {
  // 线上环境地址，同学们根据自己的需要配置修改
  const url = debug ? '/api/getDiscList' : 'http://ustbhuangyi.com/music/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {params: data}).then((res) => { return Promise.resolve(res.data) })
}
