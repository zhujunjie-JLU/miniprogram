// pages/drug/drug.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescription: [{
      date:"一日三次",
      drug:"枸地氯雷他定"
    },
    {
      date: "一日5/6次外用",
      drug: "炉甘石洗剂"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var username = app.globalData.userPhone;
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/drug.php',
      data: {
        userName: username,
        requestType: "drug"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'content-type':'application/json'
      },
      method: 'POST',
      success: function (res) {
        var str = res.data;
        console.log(str);
        var drugarray = Array();
        drugarray = str.split(',');
        console.log(drugarray.length);
        var temp = that.data.prescription;
        for (var i = 0; i < drugarray.length; i = i + 3) {
          var neweyelocation = drugarray[i];
          var newdate = drugarray[(i + 1)];
          var newdrug = drugarray[(i + 2)];
          console.log(neweyelocation);
          var newid = 0;
          temp.push(
            {
              id: newid,
              eyelocation: neweyelocation,
              date: newdate,
              drug: newdrug
            }
          );
          newid++;
        }
        that.setData({
          prescription: temp
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