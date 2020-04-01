class childNode{
  constructor(){
    this._name = "我是子节点";
  }
  get name(){
    return this._name;
  }
}
// 尝试在export中新建一个对象
export let child = new childNode();