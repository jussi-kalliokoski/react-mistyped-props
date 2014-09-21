"use strict";

describe("MistypedPropsMixin", function () {
    var MistypedPropsMixin = require("../lib/MistypedPropsMixin");
    var component;

    beforeEach(function () {
        sinon.stub(console, "warn");
    });

    afterEach(function () {
        console.warn.restore();
    });

    function createComponent (setup) {
        component = Object.create(MistypedPropsMixin);

        Object.keys(setup).forEach(function (key) {
            component[key] = setup[key];
        });
    }

    describe("when component will mount", function () {
        beforeEach(function () {
            createComponent({
                displayName: "FooComponent",

                propTypes: {
                    foo: function () {},
                    bar: function () {},
                },

                props: {
                    car: "baz",
                    foo: "cat",
                },
            });

            component.componentWillMount();
        });

        it("should warn for mistyped properties", function () {
            console.warn.should.have.been.calledWith(
                "Warning: component `FooComponent` does not support a prop named `car`. Did you mean `bar`?"
            );
        });
    });

    describe("when component will receive new props", function () {
        beforeEach(function () {
            createComponent({
                displayName: "BarComponent",

                propTypes: {
                    firstName: function () {},
                    lastName: function () {},
                    title: function () {},
                },
            });

            component.componentWillReceiveProps({
                thirstName: "James",
                lastName: "Bond",
                fiddle: "Mr.",
            });
        });

        it("should warn for mistyped properties", function () {
            console.warn.should.have.been.calledWith(
                "Warning: component `BarComponent` does not support a prop named `thirstName`. Did you mean `firstName`?"
            );
            console.warn.should.have.been.calledWith(
                "Warning: component `BarComponent` does not support a prop named `fiddle`."
            );
        });
    });
});
