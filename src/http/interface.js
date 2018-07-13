import axios from './api' // 引入 api
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

//  get /topics 主题首页
const getTopics = params => {
  return axios({
    url: '/topics',
    method: 'get',
    params
  })
}

// get /topic/:id 主题详情
const getArticle = (id,params) => {
  return axios({
    url: '/topic/'+id,
    method: 'get',
    params
  })
}

// 验证accesstoken
const checkKey = params => {
  return axios({
    url: '/accesstoken',
    method: 'post',
    params
  })
}
// get /user/:loginname 用户详情
const getUser = (loginname,params) => {
  return axios({
    url: '/user/'+loginname,
    method: 'get',
    params
  })
}

// 默认全部导出
export default {
  checkKey,
  getTopics,
  getArticle,
  getUser,
}
