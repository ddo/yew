var yew     = require('../');
var expect  = require('chai').expect;
var request = require('request');

describe("#yew", function() {
    describe("#simple", function() {
        it("should correct", function(done) {
            yew(function *() {
                var data = yield [request, 'https://graph.facebook.com/facebook'];

                expect(data[0]).to.be.a('null');
                expect(data[1]).to.be.an('object');
                expect(JSON.parse(data[2])).to.be.an('object');
                done();
            });
        });
    });

    describe("#object", function() {
        it("should correct", function(done) {
            yew(function *() {
                var data = yield [request, {
                    url: 'https://graph.facebook.com/GitHub',
                    json: true
                }];

                expect(data[0]).to.be.a('null');
                expect(data[1]).to.be.an('object');
                expect(data[2]).to.be.an('object');
                done();
            });
        });
    });

    describe("#request.get", function() {
        it("should correct", function(done) {
            yew(function *() {
                var data = yield [request.get, 'https://graph.facebook.com/tjholowaychuk'];

                expect(data[0]).to.be.a('null');
                expect(data[1]).to.be.an('object');
                expect(JSON.parse(data[2])).to.be.an('object');
                done();
            });
        });
    });
});
