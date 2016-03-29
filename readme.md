# safe-match

## Description
Prevent match API from the result of null.

## Install
```
$ npm i safe-match
```

## API
- match
- init
- reset

## Usage
``` javascript
var safeMatch = require('safe-match').match
safeMatch('foo', /bar/) // => 0

var safeMatchInit = require('safe-match').init
var safeMatchReset = require('safe-match').reset
safeMatchInit()
'foo'.safeMatch(/bar/) // => 0
safeMatchReset()
'foo'.safeMatch(/bar/) // => null

safeMatchInit({
    name: 'match'
})
'foo'.match(/bar/) // => 0
safeMatchReset()
'foo'.match(/bar/) // => null

safeMatchInit({
    noConflict: true
})
'foo'.safeMatch(/bar/, true) // => 0
'foo'.safeMatch(/bar/) // => null
safeMatchReset()
'foo'.match(/bar/, true) // => null
```
