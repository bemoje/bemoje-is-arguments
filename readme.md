# @bemoje/is-arguments

Returns whether the passed value is an arguments-object

#### Version

<span><a href="https://npmjs.org/@bemoje/is-arguments" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-arguments" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-arguments" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-arguments.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-arguments" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-arguments.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-arguments" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-arguments" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-arguments/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-arguments" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-arguments
npm install --save @bemoje/is-arguments
npm install --save-dev @bemoje/is-arguments
```

## Usage

```javascript
import isArguments from '@bemoje/is-arguments'

;(() => {
	return isArguments(arguments)
})()
//=> true

isArguments(1, 2)
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isArguments

##### Returns
whether the passed value is an arguments-object

##### Parameters

-   `value` **any** The value to evaluate.

##### Returns
**[boolean][3]** 

[1]: #isarguments

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean