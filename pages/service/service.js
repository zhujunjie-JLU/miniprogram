// pages/service/service.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    imageHeight: 0,
    buttonHeight: 0,
    tabHeight: 0
  },
  classClick: function () {
    wx.navigateTo({
      url: '../class/class'
    })
  },
  chatClick: function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  getWindowHeight: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight
        that.setData({
          windowHeight: clientHeight,
          imageHeight: clientHeight * 0.35,
          buttonHeight: clientHeight * 0.1,
          tabHeight: clientHeight * 0.05
        })
        // console.log(clientHeight*2)
        // console.log(clientHeight * 0.9)
      }

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("当前账户名", app.globalData.userPhone)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getWindowHeight();
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

  }
})