import isArguments from '../src/is-arguments'
;(() => {
	return isArguments(arguments)
})()
//=> true

isArguments(1, 2)
//=> false
