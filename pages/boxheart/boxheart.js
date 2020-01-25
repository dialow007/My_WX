// pages/boxheart/boxheart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res_data:[],
    box_id: "",
    baseUrl: app.globalData.erpUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getScancode: function () {
    var that = this;

    wx.scanCode({
      success: (res) => {
        var result = res.result;

        that.setData({
          box_id: result,
        })
      }
    })

  },
  keyWordInput: function (e) {
    this.setData({
      box_id: e.detail.value
    })
    // this.data.box_id = e.detail.value;
  },
  query_info: function () {
    var id = this.data.box_id;
    console.log(id);
    var url = this.data.baseUrl;
    var that = this;
    if (id != "") {
      wx.request({
        url: url + '/box',
        method: "POST",
        data: {
          "number": id
        },
        success: function (res) {
          var value = res.data;
          console.log(value.data);
          that.setData({
            res_data: value.data
          })
        },
        fail: function () {
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
        title: '请输入uuid',
        duration: 3000 //提示的时间毫秒
      })
    }

  }

})