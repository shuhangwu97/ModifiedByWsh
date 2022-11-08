// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:['111', '222', '333'],
    newData:'',
  },
  HandleAdd(text) {
    this.setData({
      newData:text.detail.value,
    })
  },
  HandleTap() {
    this.setData({
      List:[...this.data.List,this.data.newData],
      newData:'',
    });


  },
  HandleDelete(evt){
    console.log(evt.target.dataset.myid);
    this.data.List.splice(evt.target.dataset.myid,1);
    this.setData({
      List:this.data.List,
    })
   
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