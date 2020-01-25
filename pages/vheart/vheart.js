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
    baseUrl: app.globalData.erpUrl

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
      wx.request({
        url: url + '/test',
        method: "POST",
        data: {
          "number": id
        },
        success: function(res) {
          var value = res.data;
          // console.log(value.data);
          that.setData({
            res_data: value.data
          })
        },
        fail: function() {
          wx.showToast({
            icon: 'none',
            title: '服务异常！',
            duration: 2000
          })
        },


      })
    } else {
      wx.showToast({
        icon: 'none', //提示图标
        title: '请输入编号',
        duration: 3000 //提示的时间毫秒
      })
    }

  }
})