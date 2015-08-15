# meta-keys
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/meta-keys.svg?style=flat)
![](http://img.shields.io/npm/dm/meta-keys.svg?style=flat)
![](http://img.shields.io/npm/l/meta-keys.svg?style=flat)

Get the state of any pressed meta keys, differentiating between their left/right location on the keyboard.

## Usage

[![NPM](https://nodei.co/npm/meta-keys.png)](https://nodei.co/npm/meta-keys/)

### `keys = MetaKeys([element])`

Creates a new instance of `meta-keys`, listening to keyboard events fired on `element`. If `element` is not supplied, `window` will be used.

``` javascript
const keys = require('meta-keys')()

setInterval(function () {
  if (keys.shift[0]) {
    console.log('Left shift key is down')
  }
  if (keys.shift[1]) {
    console.log('Right shift key is down')
  }
}, 1000)
```

### `keys.shift`

A `[left, right]` array of booleans, which are `true` when the *Shift* key is pressed.

### `keys.meta`

A `[left, right]` array of booleans, which are `true` when the *Meta* key is pressed (either the Windows key on Windows or Command on OSX).

### `keys.ctrl`

A `[left, right]` array of booleans, which are `true` when the *Control* key is pressed.

### `keys.alt`

A `[left, right]` array of booleans, which are `true` when the *Alt*/*Option* key is pressed.

### `keys.dispose()`

Removes all attached event listeners and sets all key states to false. To be used for cleaning up after yourself if required.


## License

MIT. See [LICENSE.md](http://github.com/hughsk/meta-keys/blob/master/LICENSE.md) for details.
