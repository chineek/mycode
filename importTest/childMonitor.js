import {child} from "./childNode" 
export default (childFromParent)=>{
  console.log("monitor:",child.name);
  console.log("两个child是否一致",typeof childFromParent === typeof child,childFromParent === child);
  if(typeof childFromParent === typeof child&&childFromParent === child)
    console.log("事实证明，使用import导入的两个child对象是同一个对象，并没有重新new");
}