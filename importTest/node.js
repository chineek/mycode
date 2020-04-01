import {child} from "./childNode"
import moniter from "./childMonitor"

// 测试monitor中导入的'child'和node中导入的'child'是否是同一个对象
console.log("node:",child.name);
child._name = "我是被修改的子节点";
console.log("node:",child.name);
moniter(child);