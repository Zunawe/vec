const assert = require('assert')
const vecn = require('../src/index.js')
const {vec3} = vecn

suite('static methods', function () {
  var v1, v2, v3

  setup(function () {
    v1 = vec3(1)
    v2 = vec3(2)
    v3 = vec3(1, 2, 3)
  })

  test('add', function () {
    assert.deepEqual(vecn.add(v1, v2, v3), vec3(4, 5, 6))
  })

  test('multiply', function () {
    assert.deepEqual(vecn.multiply(v1, v2, v3), vec3(2, 4, 6))
  })

  test('lerp', function () {
    assert.deepEqual(vecn.lerp(v1, v2, 0), v1)
    assert.deepEqual(vecn.lerp(v1, v2, 1), v2)
    assert.deepEqual(vecn.lerp(v1, v2, 0.5), vec3(1.5, 1.5, 1.5))
    assert.deepEqual(vecn.lerp(v1, v3, 0.2), vec3(1, 1.2, 1.4))
  })

  test('lerp clamp', function () {
    assert.deepEqual(vecn.lerp(v1, v2, -5), v1)
    assert.deepEqual(vecn.lerp(v1, v2, 5), v2)
  })

  test('slerp', function () {
    assert.deepEqual(vecn.slerp(v1, v2, 0), v1)
    assert.deepEqual(vecn.slerp(v1, v2, 1), v2)
    assert(vecn.slerp(v1, v2, 0.5).approximatelyEquals(vec3(1.5, 1.5, 1.5)))
    assert(vecn.slerp(vec3(1, 0, 0), vec3(0, 1, 0), 0.5).approximatelyEquals(vec3(1, 1, 0).normalize()))
  })

  test('slerp clamp', function () {
    assert.deepEqual(vecn.slerp(v1, v2, -5), v1)
    assert.deepEqual(vecn.slerp(v1, v2, 5), v2)
  })

  test('slerp dot product clamp', function () {
    assert.deepEqual(vecn.slerp(v1, v2, 0), v1)
    assert.deepEqual(vecn.slerp(v1, v2.neg(), 0), v1)
  })
})
