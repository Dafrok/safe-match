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
safeMatch('foo', /bar/) // => []

var safeMatchInit = require('safe-match').init
var safeMatchReset = require('safe-match').reset
safeMatchInit()
'foo'.safeMatch(/bar/) // => []
safeMatchReset()
'foo'.safeMatch(/bar/) // => null

safeMatchInit({
    name: 'match'
})
'foo'.match(/bar/) // => []
safeMatchReset()
'foo'.match(/bar/) // => null

safeMatchInit({
    noConflict: true
})
'foo'.safeMatch(/bar/, true) // => []
'foo'.safeMatch(/bar/) // => null
safeMatchReset()
'foo'.match(/bar/, true) // => null
```
