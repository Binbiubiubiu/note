/**
 * 模拟new
 * 
 * 1.它创建了一个全新的对象
 * 2.它会被执行[[Prototype]]（也就是__proto__）链接
 * 3.它使this指向新创建的对象
 * 4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
 * 5.如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用

作者：寻找海蓝96
链接：https://juejin.im/post/5d51e16d6fb9a06ae17d6bbc
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}
