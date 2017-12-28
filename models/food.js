var Food = function(name, price, quantity){
  this.name = name
  this.price = price
  this.twoForOne = false
  this.quantity = quantity
}

Food.prototype.tfo = function() {
  this.twoForOne = true
}


module.exports = Food
