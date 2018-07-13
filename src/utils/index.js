class Tools {
  constructor() {
      this.formatDate = this.formatDate.bind(this)
  }
  /* 距离上次时间还有。。 */
  formatDate(str) {
      let date = new Date(str);
      let time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
          return '';
      } else if (time / 1000 < 60) {
          return '刚刚';
      } else if ((time / 60000) < 60) {
          return parseInt((time / 60000),10) + '分钟前';
      } else if ((time / 3600000) < 24) {
          return parseInt((time / 3600000),10) + '小时前';
      } else if ((time / 86400000) < 31) {
          return parseInt((time / 86400000),10) + '天前';
      } else if ((time / 2592000000) < 12) {
          return parseInt((time / 2592000000),10) + '月前';
      } else {
          return parseInt((time / 31536000000),10) + '年前';
      }
  }
  /* 本地数据存储或读取 */
  localItem (key, value) {
      if (arguments.length === 1) {
          return localStorage.getItem(key);
      } else {
          return localStorage.setItem(key, value);
      }
  }
  /* 删除本地数据 */
  removeLocalItem (key) {
      if (key) {
          return localStorage.removeItem(key);
      }
      return localStorage.removeItem();
  }
  /* 类型分类
   *  ask share job good dev
   *  问答 分享 精华 招聘 客户端测试
   */
  switchTabs(tab) {
    switch (tab){
      case 'ask': return '问答';
      case 'share': return '分享';
      case 'job': return '招聘';
      case 'good': return '精华';
      case 'dev': return '测试';
      default: return;
    }
  }
}

export default new Tools()
