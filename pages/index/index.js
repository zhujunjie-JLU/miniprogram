//index.js
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    integration_now: 0,
    userInfo: {},
    usename: 0,
    administrator: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  dataClick: function () {
    wx.navigateTo({
      url: '../data/data'
    })
  },
  integrationClick: function () {
    wx.navigateTo({
      url: '../integration/integration'
    })
  },
  surveyClick: function () {
    wx.navigateTo({
      url: '../survey/survey'
    })
  },
  drugClick: function () {
    wx.navigateTo({
      url: '../drug/drug'
    })
  },

  aboutClick: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  imageClick: function () {
    wx.navigateTo({
      url: '../image/image'
    })
  },
  onLoad: function () {
    console.log("当前账户名", app.globalData.userPhone)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        username: app.globalData.userPhone
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /*用来发送模板消息*/
  /**向第三方服务器发送请求，在后端用PHP文件向微信后台发送请求获得access_token */
  sendNotice: function () {
    var that = this;
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/getOpenid.php',
      data: {
        requestType: "getAccessToken"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'

      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        var access_token = res.data;
        wx.setStorage({
          key: 'ACCESS_TOKEN',
          data: access_token
        })
        that.sendtemplate();//发送模板消息
      }
    })
  },
  /**在服务器端向微信后台申请发送模板消息 */
  sendtemplate: function () {
    var openid = wx.getStorageSync('openid');
    var access_token = wx.getStorageSync('ACCESS_TOKEN');
    var template_id = 'H2rEY9jG5mxBlRt1QPz9f1ebGp9a_W-rUtkNXSv4x-U';
    var data = {
      'keyword1': { 'value': '妥布霉素地塞米松眼膏' },
      'keyword2': { 'value': '上午8:30' },
      'keyword3': { 'value': '3片' },
      'keyword4': { 'value': '本人' }
    };
    data = JSON.stringify(data);//非常的重要！
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/getOpenid.php',

      data: {
        //openid: openid,
        access_token: access_token,
        template_id: template_id,
        data: data,
        requestType: "sendtemplate"
      },

      dataType: "json",

      header: {
        'content-type': 'application/x-www-form-urlencoded'

      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);

      }
    })

  }

})
