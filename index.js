const shift = require('stream-shift')

module.exports = shiftAsync

async function shiftAsync (stream) {
  let result = shift(stream)
  if (result !== null) { return result }

  return new Promise((resolve, reject) => {
    stream.once('error', reject)
    stream.once('close', reject)
    stream.once('readable', () => {
      stream.removeListener('error', reject)
      stream.removeListener('close', reject)
      result = shift(stream)
      resolve(result)
    })
  })
}
