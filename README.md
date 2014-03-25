yew
===

[![NPM version](https://badge.fury.io/js/yew.png)](http://badge.fury.io/js/yew)

[![Coverage Status](https://coveralls.io/repos/ddo/yew/badge.png?branch=master)](https://coveralls.io/r/ddo/yew?branch=master)
[![Code Climate](https://codeclimate.com/github/ddo/yew.png)](https://codeclimate.com/github/ddo/yew)

![codeship](https://www.codeship.io/projects/653260a0-963c-0131-9e13-4647d55f964d/status)

Generator based flow-control

##Caution

Since generators is a new feature in JavaScript ES6, so you need:

Node version: ~0.11.x

Then run with ``node --harmony-generators`` flag

##Installation
    $ npm install yew --save

##Usage

###Async way:
```js
var request = require('request');

request({
    url: 'https://graph.facebook.com/GitHub',
    method: 'GET',
    json: true
}, function(err, res, body) {
    console.log(body);
});
```

###Yew way: (Sync way :smiley:)
```js
var yew     = require('yew');
var request = require('request');

yew(function *() {
    var data = yield [request, {
        url: 'https://graph.facebook.com/GitHub',
        method: 'GET',
        json: true
    }];

    console.log(data[0]); //err
    console.log(data[1]); //res
    console.log(data[2]); //body
});
```

##How to use

* ``yield`` an array
* Array format: [function, argument1 [, argument2, ...]]
* No need callback function in array
* Callback of function must be the last argument

##Return

```js
request('https://graph.facebook.com/GitHub', function(err, res, body) {
})
```

```js
var data = yield [request, 'https://graph.facebook.com/GitHub'];

/*
data = [
    0: err,
    1: res,
    2: body
]
*/
```

##Example
```js
var yew     = require('yew');
var request = require('request');

yew(function *() {
    var facebook = yield [request, 'https://graph.facebook.com/facebook'];

    var tj       = yield [request.get, 'https://graph.facebook.com/tjholowaychuk'];

    var github   = yield [request, {
        url: 'https://graph.facebook.com/GitHub',
        json: true
    }];

    console.log(facebook[2]);
    console.log(tj[2]);
    console.log(github[2]);
});
```
##Todo

* Error handler
