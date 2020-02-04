// pages/vheart/vheart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res_data: [],
    box_id: "",
    title: "小V设备",
    baseUrl: app.globalData.erpUrl,
    v_list:[],
    data_res:"暂无数据",
    _color: { "在线": "#39b54a", "离线": "#e54d42" }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() ;
    this.query_info();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  keyWordInput: function(e) {
    this.data.box_id = e.detail.value;
  },

  query_info: function() {
    var id = this.data.box_id;
    var url = this.data.baseUrl;
    var that = this;
    if (id != "") {
      wx.showToast({ title: '加载中', icon: 'loading', duration: 10000 });
      wx.request({
        url: url + '/test',
        method: "POST",
        data: {
          "number": id
        },
        success: function(res) {
          var value = res.data;
          // console.log(value.data);
          if (value.data.length>0){
            that.setData({
              res_data: value.data,
              data_res:"没有更多数据了"
            });
          }
          else{
            
            that.setData({
              res_data: value.data,
              data_res: "未查询到数据"
            });
          }
          wx.hideToast();
        },
        fail: function() {
          wx.showToast({
            icon: 'none',
            title: '服务异常',
            duration: 2000
          })
        },
        complete: function () {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        }


      })
    } else {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      wx.showToast({
        icon: 'none', //提示图标
        title: '请输入设备编号',
        duration: 3000 //提示的时间毫秒
      })
    }

  },
  play_video: function (e) {
    var v_list = e.currentTarget.dataset.video;
    // console.log(v_list);
    v_list = JSON.stringify(v_list);
    wx.navigateTo({
      url: '../playlist/playlist?path=' + v_list
    })
  }
})