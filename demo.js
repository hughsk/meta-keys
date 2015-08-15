const meta = require('./index')()

window.addEventListener('keydown', keychange, false)
window.addEventListener('keyup', keychange, false)
window.addEventListener('visibilitychange', keychange, false)
window.addEventListener('visibilitychange', delay(keychange, 250), false)

function keychange (e) {
  console.log(meta)
}

function delay (fn, delay) {
  return function (e) {
    return setTimeout(function () {
      return fn(e)
    }, delay)
  }
}
