// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.path);
    that.setData({
      path: options.path,
    });
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
  // 测试播放地址
  test_url(e){
    var url = e.currentTarget.dataset.url;
    console.log(url);
    wx.showLoading({
      title: "测试中...", mask: true
    });
    wx.request({
      url: url,
      success(res){
        var code = res.statusCode;
        if (code==200){
          if (res.data==""){
            wx.showModal({
              title: '测试异常',
              content: 'm3u8内容为空，可能原因是拉流失败',
              showCancel: false,
            })
          }
          else{
            wx.showModal({
              title: '测试正常',
              content: res.data,
              showCancel:false,
            })
          }

        }
        else{
          wx.showModal({
            title: '测试异常',
            content: res.data,
            showCancel: false,
          })
        }
      
      },
      complete:function(){
        wx.hideLoading();
      }
      

    })
  }
})