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

// post /reply/:reply_id/ups 为评论点赞
const replyUps = (reply_id,params) => {
  return axios({
    url: '/reply/'+reply_id+'/ups',
    method: 'post',
    params
  })
}

// post /topic/:topic_id/replies 新建评论
const topicReply = (topic_id,params) => {
  return axios({
    url: '/topic/'+topic_id+'/replies',
    method: 'post',
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

// get /messages 获取已读和未读消息
const getMsg = params => {
  return axios({
    url: '/messages',
    method: 'get',
    params
  })
}

// post /message/mark_one/:msg_id 标记单个消息为已读
const msgMarkOne = (msg_id,params) => {
  return axios({
    url: '/message/mark_one/'+msg_id,
    method: 'post',
    params
  })
}

// post /topics 新建主题
const createTopics = params => {
  return axios({
    // headers: {'Content-Type':'application/x-www-form-urlencoded'},
    url: '/topics',
    method: 'post',
    data:params
  })
}

// 默认全部导出
export default {
  getTopics,
  getArticle,
  getUser,
  checkKey,
  replyUps,
  topicReply,
  getMsg,
  msgMarkOne,
  createTopics,
}
