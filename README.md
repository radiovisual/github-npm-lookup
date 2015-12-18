# <img src="icon.png" width="30"> GitHub npm Lookup

> Chrome extension - Click on github's JS import/require statements for quick npm package lookup.

This Chrome Extension will convert your import/require package names into hyperlinks (to their respective npmjs.org profile) when viewing JavaScript source code on Github.

![](screenshot.png)

## ES6 `import`

 In the example below `events` and `array-uniq` are now hyperlinks to their respective npm package: 
```js
import {EventEmitter} from 'events';
import arrayUniq from 'array-uniq';
```
    
## ES5 `require()`

 In the example below `events` and `array-uniq` are now hyperlinks to their respective npm package: 
```js
var events =  require('events');
var arrayUniq = require('array-uniq');
```

## Skip Local Packages

Local packages are ignored, so your local packages will not be converted to hyperlinks:
```js
// Local packages are not converted to links:
import something from './index.js';
```


## Known Limitations

Currently, this extension will skip curried dependency declarations like:
```js
var deprecate = require('depd')('express');
```

## Install

* [Chrome extension](https://chrome.google.com/webstore/detail/github-npm-lookup/ijgbachgpjabdghaghpngjhkmimojodg)

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

