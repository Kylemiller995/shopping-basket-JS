var ShoppingBasket = function() {
  this.items = []
  this.loyaltyCard = false
}

ShoppingBasket.prototype.loyaltyCardPresent = function() {
  this.loyaltyCard = true
}

ShoppingBasket.prototype.addItem = function (item) {
  this.items.push(item)
}

ShoppingBasket.prototype.removeItem = function (itemName, amountToRemove) {
  this.items.forEach(function(element){
    if(element.name === itemName){
      element.quantity -= amountToRemove
    }
    if( element.quantity < 0 ){
      element.quantity = 0
    }
  })
}

ShoppingBasket.prototype.itemCost = function(item){
  if(item.quantity > 1 && item.quantity % 2 === 0 && item.twoForOne) {
    var subtotal = item.quantity * item.price
    subtotal /= 2
    return subtotal
  }
  if(item.quantity > 1 && item.quantity % 2 === 1 && item.twoForOne){
    quantityToHalf = item.quantity - 1
    subtotal = quantityToHalf * item.price
    subtotal /= 2
    subtotal += item.price
    return subtotal
  } else {
    return item.quantity * item.price
  }
}

ShoppingBasket.prototype.sumCost = function() {
  var cost = 0
  this.items.forEach(element =>{
    cost = this.itemCost(element)
  })
  if (cost >= 20){
    cost *= 0.90
  }
  if (this.loyaltyCard === true) {
    cost *= .95
  }
  return Math.round(cost)
}

module.exports = ShoppingBasket
