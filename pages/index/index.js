//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js')

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  get_v_heart: function() {
    wx.navigateTo({
      url: '../vheart/vheart'
    })
  },
  get_box_heart: function() {
    wx.navigateTo({
      url: '../boxheart/boxheart'
    })
  },
  we_ui: function() {
    wx.navigateTo({
      url: '/pages/ui/ui'
    })
  },
  play_video: function(e) {
    var path = e.currentTarget.dataset.path;
    console.log(path);
    wx.navigateTo({
      url: '../play/play?path=' + path
    })
  },
  write_cache: function() {
    wx.setStorageSync('user', 'mike')
  },
  read_cache: function() {
    var data = wx.getStorageSync('user');
    wx.showToast({
      title: data,
    })
  },
  remove_cache: function() {
    wx.removeStorageSync('user')
  },


  query() {
    utils.sendRequest('http://apk.zhonshian.com:200/test', 'POST', {'number':123})
      .then(function(res) {
          console.log(res.data);
        },
        function(err) {
          console.log(err);
        }
      )
  }
})