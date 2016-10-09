# kkt-lodash-extends
lodash函数扩展

目前已扩展的函数：

* [removeByKeys: 根据keys剔除对象属性或数组项](#removebykeys)
* [clearValues: 清除对象的属性值](#clearvalues)

# 函数列表
## removeByKeys
函数说明：根据keys剔除对象属性或数组项

使用示例：
```
// 移除指定的对象属性
var obj = {a:1, b:2, c:3, d:4};
_.removeByKeys(obj, ['a', 'c']);
// 输出：obj = [b:2, d:3]

// 移除指定的数组项
var arr = [1, 2, 3, 4, 5, 6];
_.removeByKeys(arr, [0, 2]);
// 输出：arr = [2, 4, 5, 6]
```

## clearValues
函数说明：清除对象的属性值

使用示例：
```
// 清除对象值
var obj = {name: 'nike', age: 22, isMale: true};
_.clearValues(obj);
// 输出：obj = {name: '', age: 0, isMale: false}
```