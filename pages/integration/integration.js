// pages/integration/integration.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    imageHeight: 0,
    buttonHeight: 0,
    tabHeight: 0,
    score: 1000
  },
  getWindowHeight: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight
        that.setData({
          windowHeight: clientHeight,
          imageHeight: clientHeight * 0.7,
          buttonHeight: clientHeight * 0.1,
          tabHeight: clientHeight * 0.05
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var username = app.globalData.userPhone;
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/score.php',
      data: {
        userName: username,
        requestType: "attendance"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'content-type':'application/json'
      },
      method: 'POST',
      success: function (res) {
        var score = res.data;
        console.log(res);
        console.log(typeof score);
        console.log(score);
        that.setData({
          score: score
        })
      },
      fail: function(){
        that.setData({
          score: 1010
        })
      }
    })
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

  }
})