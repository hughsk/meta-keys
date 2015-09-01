var names = {
  '16': 'shift',
  'Shift': 'shift',

  '91': 'meta',
  '92': 'meta',
  '93': 'meta',
  'Meta': 'meta',

  '17': 'ctrl',
  'Control': 'ctrl',

  '18': 'alt',
  'Alt': 'alt'
}

module.exports = MetaKeys

function MetaKeys (target, capture) {
  var state = {
    shift: [false, false],
    meta: [false, false],
    ctrl: [false, false],
    alt: [false, false],
    dispose: dispose
  }

  if (typeof window === 'undefined') {
    state.dispose = reset
    return state
  }

  target = target || window
  target.addEventListener('keydown', keydown, capture || false)
  target.addEventListener('keyup', keyup, capture || false)

  document.addEventListener('visibilitychange', reset, false)

  return state

  function reset () {
    state.shift[0] = state.shift[1] =
    state.meta[0] = state.meta[1] =
    state.ctrl[0] = state.ctrl[1] =
    state.alt[0] = state.alt[1] = false
  }

  function keydown (e) {
    var name = names[e.key || e.keyCode]
    if (!name) return
    state[name][getSide(e)] = true
  }

  function keyup (e) {
    var name = names[e.key || e.keyCode]
    if (!name) return
    state[name][getSide(e)] = false
  }

  function dispose () {
    reset()
    target.removeListener('keydown', keydown, false)
    target.removeListener('keyup', keyup, false)
  }

  function getSide (e) {
    var code = e.keyCode
    if (code > 90 && code < 94) {
      return e.keyCode !== 91 ? 1 : 0
    } else {
      return e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT ? 1 : 0
    }
  }
}
