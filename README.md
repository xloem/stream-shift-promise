# stream-shift-promise

Resolves a promise to the next buffer/object in a stream's readable queue

```
npm install stream-shift-promise
```

## Usage

``` js
var shift = require('stream-shift-promise')

console.log(await shift(someStream)) // first item from stream
```

## Credit

Thanks [@mafintosh](https://github.com/mafintosh) for writing [stream-shift](https://www.npmjs.com/package/stream-shift) on which this based.

## License

MIT

