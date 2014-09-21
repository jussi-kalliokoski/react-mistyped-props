# react-mistyped-props

[![Build Status](https://travis-ci.org/jussi-kalliokoski/react-mistyped-props.svg?branch=master)](https://travis-ci.org/jussi-kalliokoski/react-mistyped-props)
[![Coverage Status](https://img.shields.io/coveralls/jussi-kalliokoski/react-mistyped-props.svg)](https://coveralls.io/r/jussi-kalliokoski/react-mistyped-props)

react-mistyped-props is a set of tools for [React](http://facebook.github.io/react/) to detect mistyped props during runtime, similar to how `React.DOM` components warn about them.

## Installation

You can install react-mistyped-props via npm:

```bash
$ npm install --save react-mistyped-props
```

## Usage

Just define your component as usual, but include the MistypedPropsMixin as a mixin:

```javascript
var React = require("react");
var MistypedPropsMixin = require("react-mistyped-props").MistypedPropsMixin;

var MyComponent = React.createClass({
    mixins: [MistypedPropsMixin],

    propTypes: {
        firstName: React.PropTypes.String,
        lastName: React.PropTypes.String,
        title: React.PropTypes.String,
    },
});

// "Warning: component `MyComponent` does not support a prop named `thirstName`. Did you mean `firstName`?"
// "Warning: component `MyComponent` does not support a prop named `foobliobar`."
MyComponent({ thirstName: "James", lastName: "Bond", foobliobar: "meow" });
```

## Contributing

Contributions are most welcome! If you're having problems and don't know why, search the issues to see if someone's had the same issue. If not, file a new issue so we can solve it together and leave the solution visible to others facing the same problem as well. If you find bugs, file an issue, preferably with good reproduction steps. If you want to be totally awesome, you can make a PR to go with your issue, containing a new test case that fails currently!

### Development

Development is pretty straightforward, it's all JS and the standard node stuff works:

To install dependencies:

```bash
$ npm install
```

To run the tests:

```bash
$ npm test
```

Then just make your awesome feature and a PR for it. Don't forget to file an issue first, or start with an empty PR so others can see what you're doing and discuss it so there's a a minimal amount of wasted effort.

Do note that the test coverage is currently a whopping 100%. Let's keep it that way! Remember: if it's not in the requirements specification (i.e. the tests), it's not needed, and thus unnecessary bloat.
