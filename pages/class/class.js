// pages/class/class.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    identity: 0,
    pageshow: 'title',
    essay: [],
    useridentity: 0,
    essaycontent: [
      {
        title: "感冒头痛怎么办",
        image: "http://n.sinaimg.cn/sinacn/w640h481/20180103/7111-fyqinct8507485.jpg",
        section: ["  感冒是临床常见的疾病，多由流感病毒、呼吸道合胞病毒 、腺病毒等呼吸道病毒感染所引起。头疼是一种最常见的伴随症状，是机体对抗病毒感染的一种正常的反应。头痛的程度会因人，因并发症而差异较大，有的人只是轻微的疼痛，而有的人则会感觉到明显的胀痛，或者阵阵的刺痛。","  如何缓解跟治疗感冒所引起的头痛，首先还是应该针对病因进行治疗，也就是说要先进行感冒治疗。目前对感冒没有特效药，一般采用退热、止痛、抗过敏等药物的治疗。常见的复合制剂包括有对酰氨基酚、盐酸伪麻黄碱、氢溴酸右美沙芬、以及马来酸氯苯那敏，就是酚麻美敏等等药物。感冒是一个有机会自限性愈合的疾病，如果没有严重的并发症，一般5到7天可以痊愈。在感冒的早期可以多休息，减少外出和体力活动，多喝温开水，室内保持通风。适当的按摩风池、印堂等穴位，也可以减轻头痛的症状。"]
      },
      {
        title: "经常犯困没精神怎么回事",
        image: "http://n10.cmsfile.pg0.cn/group2/M00/00/FB/CgoOElpO2LeAWqcPAABvyb5z4Lg533.png",
        section: ["  部分人晚上睡眠时间够长，但白天工作和学习时总犯困，这种情况要警惕一个疾病OSAHS，即睡眠呼吸暂停综合征。睡眠呼吸暂停综合征分为阻塞性和中枢性，在老百姓当中阻塞性睡眠呼吸暂停综合征常见。晚上睡觉打呼噜需要警惕，身边的人要关注晚上睡觉是否出现长时间突然打呼噜声音停了，经过一段时间，突然又出现比较响亮的打呼噜，这可能存在阻塞性睡眠呼吸暂停综合征。该疾病常见于肥胖病人，但并不只有肥胖人出现，体型消瘦也有这种情况。"]
      },
      {
        title: "如何预防腰间盘突出",
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571244436709&di=7a6cc7a9c1b263675932dbf131c882f1&imgtype=0&src=http%3A%2F%2Fp0.ssl.qhimgs4.com%2Ft0175a8a0e43f400227.jpg",
        section: ["  腰间盘突出的预防要针对它的病因，如果说有家族史，那要考虑就是定期的、密切的找医生来早期的复查，有临床症状就要尽快的到医院去确诊，如果是长时间的工作职业导致你经常的需要久坐，建议你要增加一些改变你的工作生活习惯、增加一些腰背肌的训练，包括请专业的康复医生或者康复师，或者是健身的教练来锻炼你的脊柱躯干和核心肌群，如果说你已经是一个腰间盘突出的患者，那你平时要经常的避免腰椎的负重，减少腰椎过度的使用，然后同时也要增加一些康复锻炼的一些体操，来避免腰间盘突出的复发和加重。"]
      },
      {
        title: "如何预防老年痴呆",
        image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974105573,1700992426&fm=26&gp=0.jpg",
        section: ["  老年痴呆是属于神经科比较常见的一种疾病，一般来说主要是在年纪比较大的患者中，尤其是年纪大于60岁以上的老年患者，发病率是比较高的，如果出现了老年痴呆，那么这种疾病是不可逆性的，所以对于老年痴呆预防非常重要！","  一般来说，我们建议患者一定要注意休息，避免情绪的激动过度的紧张和焦虑，有一些抑郁的患者非常容易合并老年痴呆，所以调节情绪非常的重要，此外，患者一定要调节自己的作息时间，不能过度的劳累熬夜，在饮食上患者也一定要注意一定要清淡的饮食，多吃新鲜的蔬菜水果，尤其是富含维生素类的水果可以多吃，患者还需要适量的运动，以降低患者将来出现老年痴呆的风险。"]
      },
      {
        title: "年轻人脱发的原因",
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571839543&di=c05de7b1c744d681ab9cb6d494447d05&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.tecenet.com%2Ffile%2Fupload%2F201812%2F19%2F0954488930193.jpg",
        section: ["  为什么年轻人也会出现脱发呢？年轻人脱发一般以雄激素脱发最为常见，而雄激素性脱发的最主要原因是，与遗传和精神因素有关。",
          "  脱发伴有精神因素，占脱发患者超过6成，主要表现为工作或者学习紧张、失眠、睡眠质量差、睡眠不足、生活不规律等等。",
          "  发病人群以教师、工程师、和学生等从事脑力劳动的人群为主。一些患者明显地在精神压力大的时候，脱发加重。调查研究显示，脱发会对患者精神心理产生重大的影响，反过来精神心理的压力又加重了脱发。"]
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var username = app.globalData.userPhone;
    if (username == "18373120370") {
      this.setData({
        useridentity: 1
      })
    }
  },
  /**
   * 根据点击展示内容
   */
  articleShow: function (event) {
    console.log(event.target.id);
    var index = -1;
    var essaycontent = this.data.essaycontent;
    console.log(essaycontent);
    for (var i = 0; i < essaycontent.length; i++) {
      if (essaycontent[i].title == event.target.id) {
        var indexflag = i;
        break;
      }
    };
    console.log(indexflag);
    var title = this.data.essaycontent[indexflag].title;
    var image = this.data.essaycontent[indexflag].image;
    var section = this.data.essaycontent[indexflag].section;
    this.setData({
      pageshow: 'content',

      essay: {
        "title": title,
        "image": image,
        "section": section
      }

    });
  },
  /**
   * 这个函数没写完，本意是为研究者留的一个可自定义课堂内容的接口，
   * 在area输入内容后点击那个输入的区域后能自动更新到数据库中并更新到小青课堂首页，等以后有空想好了再写
   */
  bindblurInput: function (event) {
    var inputtext = event.detail.value;
    var tempID = event.currentTarget.id;
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