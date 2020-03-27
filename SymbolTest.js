// 1.声明
let session = Symbol("session");

// 2.唯一性
let sessionKey = Symbol("session");
let cookiesKey = Symbol("session");
console.log(sessionKey, cookiesKey, sessionKey === cookiesKey);
console.log(typeof sessionKey, typeof cookiesKey, typeof sessionKey === typeof cookiesKey);
let httpReq = {
  [sessionKey]: 1,
  [cookiesKey]: 2
}
console.log(httpReq[sessionKey], httpReq[cookiesKey]);

// 3. 隐藏性
for (let item in httpReq) {
  // 以下代码不会执行
  console.log("Iterater");
  console.log(item, httpReq[item]);
}
console.log("keys", Object.keys(httpReq));
console.log("OwnPropertySymbols", Object.getOwnPropertySymbols(httpReq));
console.log("OwnPropertyNames", Object.getOwnPropertyNames(httpReq));

// 4.创建全局Symbol
let globalKey = Symbol.for("session");
let re_globalKey = Symbol.for("session");
console.log("全局key的比较:", "globalKey:", globalKey, "re_globalKey:",
  re_globalKey, "sessionKey", sessionKey, "cookiesKey:", cookiesKey,
  globalKey === re_globalKey, globalKey === sessionKey, globalKey === cookiesKey);
httpReq[globalKey] = 3;
httpReq[re_globalKey] = 4;

const symbolKeys = Object.getOwnPropertySymbols(httpReq);
for (let sIndex in symbolKeys) {
  const symbol = symbolKeys[sIndex]
  console.log(symbol, httpReq[symbol]);
}

// 5.取出Symbol的key
for (let sIndex in symbolKeys) {
  const symbol = symbolKeys[sIndex];
  // 仅仅能够获得for的key值
  console.log(symbol, ".keyFor=", Symbol.keyFor(symbol));
}