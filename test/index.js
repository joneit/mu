'use strict';

/* global describe, it, beforeEach, afterEach */

require('should'); // extends Object with `should`

var µ = require('../src/');

describe('µ object that', function() {
    it('is a function that', function() {
        (typeof µ).should.equal('function');
    });
    describe('when used as a constructor returns an API that', function() {
        var wrapped,
            obj = { a: 5, b: 60, c: 700 };
        beforeEach(function() {
            wrapped = new µ(obj);
        });
        describe('has a member `value` that', function() {
            it('is a method', function() {
                (typeof wrapped.value).should.equal('function');
            });
            it('returns the original object', function() {
                wrapped.value().should.equal(obj);
            });
        });
        // etc.......
    });
});
