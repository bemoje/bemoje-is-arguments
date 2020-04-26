/**
 * Returns whether the passed value is an arguments-object
 * @param {*} value - The value to evaluate.
 * @returns {boolean}
 */
function isArguments(value) {
	return Object.prototype.toString.call(value) === '[object Arguments]'
}

export default isArguments;
