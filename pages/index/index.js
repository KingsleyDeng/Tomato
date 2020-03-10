//index.js
const util = require('../../utils/util.js')

const defaultLogName = {
  work: '工作',
  rest: '休息'
}

const actionName = {
  stop : '停止',
  start : '开始'
}


Page({
  data: {

    remainTimeText:'',
    timerType:'work',
    completed:false,
    isRunning:false,
    log:{},
    leftDeg : initDeg.left,
    rightDeg : initDeg.right

  },
  
  onLoad: function () {
    
  },

  onShow:function(){

    if(this.data.isRunning) return
    let workTime = util.

  },

  startTimer:function(e){
    let startTime = Date.now()
    let isRunning = this.data.isRunning
    let timerType = e.target.dataset.type
  }
})
