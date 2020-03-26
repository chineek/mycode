// function test(){
//     console.log(this)
// }
// test.apply(对象)

//观察者设计模式
var event = {
  list: [],
  listen: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn); //往特定的商品列表中添加订阅
  },
  publish: function () {
    var key = arguments[0];
    var fns = this.list[key];
    for (var i = 0, fn; fn = fns[i++];) {
      //执行订阅的fn arguments js内置对象 存储所有实参
      fn.apply(this, arguments);
    }
  }
}
// 观察者对象初始化
var initEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
}
// 发布者
var shopObj = {}
initEvent(shopObj);
// A添加订阅 huawei
shopObj.listen("huawei", function (brand, model) {
  console.log("A订阅：" + brand + " " + model);
})
// B添加订阅 apple
shopObj.listen("apple", function (brand, model) {
  console.log("B订阅：" + brand + " " + model);
})
//双11 商家发布消息
shopObj.publish("huawei", "P30")

shopObj.publish("apple", "iphone 11")

// 刻意制造冲突
