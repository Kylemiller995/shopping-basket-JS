var ShoppingBasket = require('../models/shopping_basket.js')
var Food = require('../models/food.js')
var assert = require('assert')

describe('shopping basket tests', function(){

  beforeEach(function(){
    //name price quantity
    food1 = new Food("pizza", 5, 4)
    food1.tfo()
    food2 = new Food("burger", 20, 4)
    food3 = new Food("steak", 5 , 3)
    shoppingBasket = new ShoppingBasket()
  })

  it('can add items', function() {
    shoppingBasket.addItem(food2)
    assert.strictEqual(shoppingBasket.items.length, 1)
  })



  it('should apply over 20 discount', function(){
    shoppingBasket.addItem(food2)
    assert.strictEqual(shoppingBasket.sumCost(), 72)
  })

  it('should apply loyalty card discount', function(){
    shoppingBasket.addItem(food2)
    shoppingBasket.loyaltyCardPresent()
    assert.strictEqual(shoppingBasket.sumCost(), 68)
  })

  it('should do bogof', function() {
    shoppingBasket.addItem(food1)
    assert.strictEqual(shoppingBasket.sumCost(), 10)
  })

  it('should do bogof on odd number', function () {
    food3.tfo()
    shoppingBasket.addItem(food3)
    assert.strictEqual(shoppingBasket.sumCost(), 10)
  })
  
})
