# <img src="icon.png" width="30"> GitHub npm Lookup

> Chrome extension - Click on github's JS import/require statements for quick npm package lookup.

![](screenshot.png)

## ES6 `import`

This extension will convert your package names into hyperlinks:
```js
import {EventEmitter} from 'events';
import arrayUniq from 'array-uniq';
```
    
## ES5 `require()`

This extension also converts package names inside of require statements into hyperlinks:
```js
import {EventEmitter} from 'events';
import arrayUniq from 'array-uniq';
```

## Local Packages

Local packages are ignored, so your local packages will not attempt to be found on npm:
```js
import something from './index.js';
```


## Known Limitations

- Currently, this extension will skip curried dependency declarations like:
    ```js
    var deprecate = require('depd')('express');
    ```

## Install

* [Chrome extension](https://chrome.google.com/webstore/detail/github-npm-lookup/ijgbachgpjabdghaghpngjhkmimojodg)

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

