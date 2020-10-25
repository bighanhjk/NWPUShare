// pages/login/login.js
Page({
  wechatlogin:function(){
    console.log('wechatlogin');
  },
  aoxianglogin:function(){
    console.log('aoxianglogin');
  },
  openAgreement:function(){
    wx.navigateTo({
      url: '/pages/agreement/agreement'
      /*跳转到页面*/
    });
  }
})