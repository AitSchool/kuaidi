Page({
  data: {
    order_id: '',
    detailList: [],
    toastText: '加载中'
  },
  onLoad: function(options) {
    let order_id = options.order_id;
    this.getData(order_id);
  },
  getData: function(order_id) {
    console.log(order_id)
    let url = 'https://www.kuaidi100.com/query';
    let company = 'jd';
    wx.request({
      url: url,
      data:{
        type:company,
        postid:order_id
      },
      success:(res)=>{
        console.log(res)
        if(res.data.data.length){
          this.setData({
            detailList:res.data.data,
            order_id:order_id
          })
        }else{
          this.setData({
            toastText: res.data.message
          })
        }
      },
      fail:(err)=>{
        console.log(err)
        this.setData({
          toastText: '网络发生错误'
        })
      }
    })
  }
})