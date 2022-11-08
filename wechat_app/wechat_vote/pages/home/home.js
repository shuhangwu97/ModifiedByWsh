// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {id: 1, image: "/images/buick_century1.jpg"},
      {id: 2, image:"/images/buick_century3.jpg"},
      {id: 3, image:"/images/cadi_01.jpg"},
      {id: 4, image:"/images/cadi_02.jpg"}
    ],
    GridList:[
      {id: 1, image:"/images/admin.png", name: "管理员", site: "/pages/admin/admin"},
      {id: 2, image: "/images/participant.png", name: "参赛者", site: "/pages/participant"},
      {id: 3, image: "/images/jury.png", name: "专家评委", site: "/pages/jury/jury"},
      {id: 4, image: "/images/order.png", name: "规则详情", site: "/pages/order/order"},
      {id: 5, image: "/images/subscribe.png", name: "参赛报名", site: "/pages/subscribe/subscribe"},
      {id: 6, image: "/images/advice.png", name: "建议", site: "/pages/advice/advice"},
    ],
    img_patac: '/images/logo_01.png',
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



