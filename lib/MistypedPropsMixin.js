"use strict";

var checkForMistypedKeys = require("./utils/checkForMistypedKeys");

function checkForMistypedProps (component, props) {
    checkForMistypedKeys(
        component.displayName,
        Object.keys(component.propTypes)
    )(Object.keys(props));
}

var MistypedPropsMixin = process.env.NODE_ENV === "production" ? {} : {
    componentWillMount: function () {
        checkForMistypedProps(this, this.props);
    },

    componentWillReceiveProps: function (props) {
        checkForMistypedProps(this, props);
    },
};

module.exports = MistypedPropsMixin;
