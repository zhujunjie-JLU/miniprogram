// pages/addpeople/addpeople.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    invitecode: "0000000000",
    pname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**页面触发获得被邀请者名字 */
  invcode: function (input) {
    var pname = input.detail.value;
    console.log(pname);
    this.setData({
      pname: pname,
    });
  },
  /** 页面点击确认 后触发，出现邀请码*/
  complete: function () {
    var date = new Date();
    var invitecode = date.getTime();//高宁咛 获取当前时间(从1970.1.1开始的毫秒数)，可保证唯一
    console.log(invitecode);
    this.setData({
      invitecode: invitecode
    })
    var that = this;
    var pname = that.data.pname;
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/getOpenid.php',
      data: {
        invitecode: invitecode,
        uesrname: pname,
        requestType: "getopenid"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'content-type':'application/json'
      },
      method: 'GET',//高宁咛 get和post区别，get更容易调试
      success: function (res) {
        console.log("成功");       
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