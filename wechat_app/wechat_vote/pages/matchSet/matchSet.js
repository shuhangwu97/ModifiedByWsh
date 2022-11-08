// pages/matchSet/matchSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    match:{"name" : "", "subTime" : "", "matchTime" : "", "Owner" : "", "mtachInfo" : ""},
  },
  setMatch_name(e) {
    let match = this.data.match;
    this.data.match.name = e.detail.value;
    this.setData({
      match: match,
    })
  },
  setMatch_deadline(e) {
    let match = this.data.match;
    this.data.match.subTime = e.detail.value;
    this.setData({
      match: match,
    })
  },
  setMatch_time(e) {
    let match = this.data.match;
    this.data.match.Owner = e.detail.value;
    this.setData({
      match: match,
    })
  },
  setMatch_partment(e) {
    let match = this.data.match;
    this.data.match.matchTime = e.detail.value;
    this.setData({
      match: match,
    })
  },
  setMatch_intro(e) {
    let match = this.data.match;
    this.data.match.mtachInfo = e.detail.value;
    this.setData({
      match: match,
    })
  },
  handleRlse () {
    wx.request({
      url: 'url',
    })
  },
  uploadImg() {
    
  },
  
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
