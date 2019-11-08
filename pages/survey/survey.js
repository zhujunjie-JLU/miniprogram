// pages/yaoxh6/item/item.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introduction: '1',
    is_Glaucoma: { "yes": false, "no": false },
    introductionText: "非常感谢您参与我们的调查。本次调查的目的为了解您的用药情况及用药行为，以帮助我们调整青光眼用药管理和患者教育的策略，为广大患者提供更好的照护服务。此调查不记名，也不会对您的疾病相关诊疗和护理产生任何不良影响。感谢您的支持!！",
    priceIcon: "../../images/editor.png",
    currentFatherIndex: 0,
    questionnaireArray: [
      {
        "type": "SAQ",
        "content": {
          "description": "请输入您的名字?",
          "subject": "名字",
          "answer": ""
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "请输入您的出生日期?",
          "answer": "",
          "subject": "出生日期",
          "placeholder": "请以19940808形式"
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的性别[单选题]",
          "subject": "性别",
          "options":
            [
              { "id": 1, "name": "男", "isSelected": false },
              { "id": 2, "name": "女", "isSelected": false },
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "请输入您的身高(cm)?",
          "subject": "身高",
          "answer": "",
          "placeholder": "例：175"
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "请输入您的体重(kg))?",
          "answer": "",
          "placeholder": "例：64",
          "subject": "体重(kg)",
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "您最开始出现症状的时间：(年月)?",
          "answer": "",
          "subject": "最开始出现症状的时间(年月)",
          "placeholder": "例：200808"
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "您曾经因青光眼做过次手术（非激光）?",
          "answer": "",
          "subject": "因青光眼做过次手术（非激光）",
          "placeholder": "例：1"
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的婚姻状态: [单选题]",
          "subject": "婚姻状态",
          "options":
            [
              { "id": 1, "name": "未婚", "isSelected": false },
              { "id": 2, "name": "已婚", "isSelected": false },
              { "id": 3, "name": "分居", "isSelected": false },
              { "id": 4, "name": "离异", "isSelected": false },
              { "id": 5, "name": "丧偶", "isSelected": false },
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的文化程度： [单选题]",
          "subject": "文化程度",
          "options":
            [
              { "id": 1, "name": "文盲", "isSelected": false },
              { "id": 2, "name": "学龄前", "isSelected": false },
              { "id": 3, "name": "小学", "isSelected": false },
              { "id": 4, "name": "初中", "isSelected": false },
              { "id": 5, "name": "高中/中专", "isSelected": false },
              { "id": 6, "name": "本科/大专", "isSelected": false },
              { "id": 7, "name": "硕士及以上", "isSelected": false },
            ]
        }
      },
      {
        "type": "SAQ",
        "content": {
          "description": "您的职业： [填空题]",
          "subject": "职业",
          "answer": "",
          "placeholder": "例：建筑工人"
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您目前的职业状态： [单选题]",
          "subject": "职业状态",
          "options":
            [
              { "id": 1, "name": "在职", "isSelected": false },
              { "id": 2, "name": "在读（学生）", "isSelected": false },
              { "id": 3, "name": "病假", "isSelected": false },
              { "id": 4, "name": "无业/失业", "isSelected": false },
              { "id": 5, "name": "退休", "isSelected": false },
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的家庭人均月收入（每月家庭总收入÷家庭总人数） [单选题]",
          "subject": "家庭人均月收入（每月家庭总收入÷家庭总人数）",
          "options":
            [
              { "id": 1, "name": "＜1000元", "isSelected": false },
              { "id": 2, "name": "1000~3999元", "isSelected": false },
              { "id": 3, "name": "4000~6999元", "isSelected": false },
              { "id": 4, "name": "7000~9999元", "isSelected": false },
              { "id": 5, "name": "≥10000元", "isSelected": false },
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的居住地： [单选题]",
          "subject": "居住地",
          "options":
            [
              { "id": 1, "name": "城市", "isSelected": false },
              { "id": 2, "name": "乡镇", "isSelected": false },
              { "id": 3, "name": "农村", "isSelected": false },

            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您大多数时候： [单选题]",
          "subject": "居住状态",
          "options":
            [
              { "id": 1, "name": "独居", "isSelected": false },
              { "id": 2, "name": "与陌生人居住在一起", "isSelected": false },
              { "id": 3, "name": "与朋友、同事或同学居住在一起", "isSelected": false },
              { "id": 4, "name": "与家人居住在一起", "isSelected": false },

            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您认为家人对您的关心： [单选题] ",
          "subject": "家庭关心程度",
          "options":
            [
              { "id": 1, "name": "完全没有", "isSelected": false },
              { "id": 2, "name": "极少", "isSelected": false },
              { "id": 3, "name": "一般", "isSelected": false },
              { "id": 4, "name": "较多", "isSelected": false },
              { "id": 5, "name": "极多", "isSelected": false },
            ]
        }
      },
      {
        "type": "MCQ",
        "content": {
          "description": "医疗支付形式： [多选题] ",
          "subject": "医疗支付形式",
          "options":
            [
              { "id": 1, "name": "医保", "isSelected": false },
              { "id": 2, "name": "自费", "isSelected": false },
              { "id": 3, "name": "商业保险", "isSelected": false },
              { "id": 4, "name": "公费", "isSelected": false },
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "总的来说，您认为自己的健康状况如何？ [单选题]",
          "subject": "自估健康状况",
          "options":
            [
              { "id": 1, "name": "很好", "isSelected": false },
              { "id": 2, "name": "好", "isSelected": false },
              { "id": 3, "name": "一般", "isSelected": false },
              { "id": 4, "name": "比较差", "isSelected": false },
              { "id": 5, "name": "很差", "isSelected": false }
            ]
        }
      },
     
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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

  goBack: function () {
    console.log('to task page')
    wx.switchTab({
      url: '../task/task',
    })
  },

  getTempFatherIndex: function (input) {
    var tempFatherIndex = input.currentTarget.dataset.id;
    //console.log('currentFatherIndex: ' + tempFatherIndex);
    this.setData({
      currentFatherIndex: tempFatherIndex,
    });
  },

  /**
  * 用户如果不是青光眼，就返回上一级。如果是 青光眼，就继续答题
  */
  isGlaucoma: function (input) {
    var temp_isGlaucoma = this.data.is_Glaucoma;

    if ("yes" == input.detail.value) {
      temp_isGlaucoma["yes"] = true;
      this.setData({
        introduction: "0",
        is_Glaucoma: temp_isGlaucoma
      })
    }
    else {
      temp_isGlaucoma["no"] = true;
      this.setData({
        introduction: "1",
        is_Glaucoma: temp_isGlaucoma
      })

    }
  },
  completeIntroduct: function () {
    console.log(this.data.is_Glaucoma["yes"]);
    console.log(this.data.is_Glaucoma["no"]);
    if (this.data.is_Glaucoma["yes"]) {
      console.log("有青光眼")
    }
    else if (this.data.is_Glaucoma["no"]) {
      console.log("无青光眼")
      wx.navigateBack({
        delta: 1,
      })
    }
    else { console.log("搞错了啊喂！") }
  },

  radioChangeSCQ: function (input) {
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options) {
      if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value) {
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else {
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  checkboxChangeMCQ: function (input) {
    // console.log(input.detail.value);
    var flag = false;
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options) {
      flag = false;
      for (var j in input.detail.value) {
        if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value[j]) {
          flag = true;
        }
      }
      if (flag == true) {
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else {
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  bindblurAnswerOfSAQ: function (input) {
    var tempIndex = input.currentTarget.dataset.id;
    var tempArray = this.data.questionnaireArray;
    tempArray[tempIndex].content.answer = input.detail.value;
    // console.log(tempArray[tempIndex].content);
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  /**
   * 将回答结果（问题不上传）上传到数据库中，同时返回上一级
   */
  complete: function () {
    console.log(this.data.questionnaireArray);
    var username = app.globalData.userPhone;
    app.globalData.userdata = this.data.questionnaireArray;
    
    console.log("app.globalData.userdata:"+ app.globalData.userdata);
    wx.navigateBack({
      delta: 1,
    })
    /*
    var that = this;
    var surResult = Array();//记录回答
    var subjectlist = Array();//记录问题
    var temp = this.data.questionnaireArray;
    var flag = 0;
    for (var i = 0; i < temp.length; i++) {
      subjectlist.push(temp[i].content.subject);
      if (temp[i].type == "SCQ") {//如果是单选
        for (var j = 0; j < temp[i].content.options.length; j++) {
          if (temp[i].content.options[j].isSelected == true) {
            surResult.push(temp[i].content.options[j].name);
            flag = 1;

          }
        }
        if (flag == 0) {
          surResult.push('by2')//'by2'是空选的标记，好为后面数据库更新方便，以下的by2都是同样原因
        }
        else if (flag == 1) {
          flag = 0;
        }
        else { console.log("出错了") }
      }
      else if (temp[i].type == "SAQ") {//如果是问答
        if (temp[i].content.answer != "") {
          surResult.push(temp[i].content.answer)
        };
        if (temp[i].content.answer == "") {
          surResult.push('by2')//我心中最强未解散的华语女团歌手
        }
      }
      else if (temp[i].type == "MCQ") {//如果是 多选
        var newvalue = "";
        var countvalue = 0;
        for (var j = 0; j < temp[i].content.options.length; j++) {
          if (temp[i].content.options[j].isSelected == true) {
            if (countvalue > 0) {//countvalue是记录多选中选了几项
              newvalue = newvalue + '  ';//如果多选题有多个回答，则在两个回答中加一个空格
            };
            newvalue = newvalue + temp[i].content.options[j].name;
            countvalue++;
          }
        }
        if (countvalue == 0) { newvalue = 'by2' };//如果没有一个被选中，则用by2做标记表示空选
        surResult.push(newvalue);
      }
      else { console.log("出错啦") }
    }
    wx.request({
      url: 'https://heartdection.mynatapp.cc/glaucoma/survey.php',
      data: {
        userName: username,
        answer: surResult,//答案
        question: subjectlist,//简化版问题，用于资料显示
        requestType: "survey"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'content-type':'application/json'
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
        console.log(res.data);

        wx.navigateBack({
          delta: 1,
        })

      }
    })
    */
  },
})
