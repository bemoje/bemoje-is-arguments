import isArguments from '../src/is-arguments'

describe('isArguments', () => {
	test('works', () => {
		expect(
			(() => {
				return isArguments(arguments)
			})(),
		).toBe(true)
		expect(isArguments(1, 2)).toBe(false)
	})
})
