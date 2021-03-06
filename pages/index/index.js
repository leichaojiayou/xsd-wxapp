//index.js
//获取应用实例
const app = getApp()
const xsd = require('../../xsd/index')
const sync = require('../../utils/sync.js')

Page({
  data: {
    userInfo: null
  },
  onLoad(){
    xsd.api.get('xsd/base').then(data=>{
      sync.setEntity('base', data.base)
      this.redirect()
    })
  },
  onShow(){
    this.redirect()
  },
  redirect(){
      const user = app.globalData.user
      if(!!user){
        if(user.protype == 10)
          wx.redirectTo({url:'../client/index'})
        else if(user.protype == 30)
          wx.redirectTo({url:'../station/index'})
        
      }else if(!this.data.userInfo){
        app.getUserInfo().then(()=>{
          this.setData({userInfo:app.globalData.userInfo})
        })
      }
  }
})
