// import
var _ = require('lodash');

// mixin
_.mixin({
	// removeByKeys: 根据keys剔除对象属性或数组项
	removeByKeys: function(obj, keys) {

		// 判断是否为数组
		if (_.isArray(obj)) {
			// 剔除数组项
			_.remove(obj, function(val, key) {
				return keys.indexOf(key) >= 0;
			});
		} else if (_.isObject(obj)) {
			// 剔除属性
			_.each(keys, function(key) {
				delete obj[key];
			});
		}

		// return
		return obj;
	},

	// clearValues: 清除对象的属性值
	clearValues: function (obj) {
		// clear
		for(var key in obj) {
			if(_.isPlainObject(obj[key])) {
				_.clearValues(obj[key]);
			} else if(_.isString(obj[key])){
				obj[key] = '';
			} else if(_.isNumber(obj[key])){
				obj[key] = 0;
			} else if(_.isBoolean(obj[key])){
				obj[key] = false;
			} else {
				obj[key] = null;
			}
		}

		// return
		return obj;
	}

});

// exports
module.exports = _;