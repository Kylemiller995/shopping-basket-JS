var assert = require('assert')
var Food = require('../models/food.js')

describe('food test', function(){
  var food;

  beforeEach(function(){
    food1 = new Food("pizza", 10 , 5)
  })

  it("should be able to toggle bogof", function(){
    food1.tfo()
    assert.strictEqual(food1.twoForOne, true)
  })
})
