(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-arguments'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Returns whether the passed value is an arguments-object
	 * @param {*} value - The value to evaluate.
	 * @returns {boolean}
	 */
	function isArguments(value) {
		return Object.prototype.toString.call(value) === '[object Arguments]'
	}

	return isArguments;

})));
