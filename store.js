var Store = function(name, city) {
 this.name = name; 
 this.city = city;
 this.inventory = [];
 this.balance = 0;
}


Store.prototype = {

 addRecord: function(record) {
  return this.inventory.push(record);
  },

  listInventory: function() {
    return this.inventory;
  },

  sell: function(recordForSale) {
    this.inventory.forEach(function(record){
      if (record = recordForSale) {
        this.balance += record.price;
        var recordToBeRevomed = this.inventory.indexOf(record);
        this.inventory.splice(recordToBeRevomed, 1);
      }

    }.bind(this))
  }


}


module.exports = Store;