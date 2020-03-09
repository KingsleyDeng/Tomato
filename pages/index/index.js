//index.js
const util = require('../../utils/util.js')

const defaultLogName = {
  work: '工作',
  rest: '休息'
}


Page({
  data: {
    remainTimeText:'',
    timerType:'work',
    completed:false,
    isRunning:false

  },
  
  onLoad: function () {
    
  },

  onShow:function(){
    this.setData({
      remainTimeText:'5:00'
    })
  },

  startTimer:function(e){
    let startTime = Date.now()
    let isRunning = this.data.isRunning
    let timerType = e.target.dataset.type
  }
})
