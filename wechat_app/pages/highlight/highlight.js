// pages/highlight/highlight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GM:['Buick' , 'Chevrolet' , 'Cadillac'],
    current:'',
    startTime:1665619200000,
    inputValue:''
  },
  HandleClick(evt){
    //console.log(evt.target.dataset.myid);
    this.setData({
      current : evt.currentTarget.dataset.myid,
    })
  },
  Handleinput(evt){
    this.setData({
      inputValue: evt.detail.value,
    })
    console.log(this.data.inputValue);
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