"use strict";

function warning (message) {
    var index = 1;
    var args = arguments;
    console.warn("Warning: " + message.replace(/%s/g, function () {
        return args[index++];
    }));
}

module.exports = warning;
