"use strict";

var Matcher = require("did-you-mean");
var contains = require("./contains");
var warning = require("./warning");

function checkForMistypedKeys (componentName, availableKeys, keys) {
    var matcher = new Matcher(availableKeys);

    return function checkForMistypedKeysCurried (keys) {
        keys.forEach(function (key) {
            if ( !contains(availableKeys, key) ) {
                var suggestion = matcher.get(key);

                if ( suggestion === null ) {
                    warning("component `%s` does not support a prop named `%s`.",
                        componentName,
                        key
                    );
                } else {
                    warning("component `%s` does not support a prop named `%s`. Did you mean `%s`?",
                        componentName,
                        key,
                        suggestion
                    );
                }
            }
        });
    };
};

module.exports = checkForMistypedKeys;
