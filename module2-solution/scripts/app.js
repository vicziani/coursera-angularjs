(function() {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    controller.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    controller.doBuy = function(index) {
      ShoppingListCheckOffService.doBuy(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{ name: "cookies", quantity: 10 },
      { name: "milk", quantity: 10 },
      { name: "tea", quantity: 10 },
      { name: "coffee", quantity: 10 },
      { name: "sugar", quantity: 10 }]
    var boughtItems = [];

    this.doBuy = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    }

    this.getToBuyItems = function() {
      return toBuyItems;
    }

    this.getBoughtItems = function() {
      return boughtItems;
    }
  }

}
)();
