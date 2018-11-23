// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type:Boolean,
      //默认value为false
      //value:false
    },
    count: {
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    yesSrc:'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      this.setData({//更新数据
         count:count,
         like:!like
      })
      // 激活
      let behavior = this.properties.like?'like':'cancel'
      //获取组件中的某一状态 第一个参数是自定义事件名称 第二个对象就可以将想要的属性拿到
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
})
