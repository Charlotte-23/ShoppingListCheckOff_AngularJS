var app = angular.module('ShoppingListCheckOff', []);

app.controller('ToBuyController',
['service', function ToBuyController(service) {
    var buyList = this;
    buyList.bought = function (index) {
        service.bought(index);
    }
    buyList.items = service.showBuy();
}])
.controller('AlreadyBoughtController',
    ['service', function AlreadyBoughtController(service) {
        var boughtList = this;
        boughtList.items = service.showBought();
        boughtList.isEmpty = function () {
            return service.emptyBought();
        }
    }])
.service('service', function service() {
    var service = this;
    var toBuy = [
        {
            name: "Haggis",
            count: "1"
        },
        {
            name: "Neeps",
            count: "2"
        },
        {
            name: "Tatties",
            count: "3"
        },
        {
            name: "Drams",
            count: "4"
        },
        {
            name: "Tablets",
            count: "5"
        },
        {
            name: "Fudge",
            count: "6"
        },
        {
            name: "Jelly Babies",
            count: "7"
        },
        {
            name: "Salt & Vinegar Crisps",
            count: "8"
        },
        {
            name: "Ale",
            count: "9"
        },
        {
            name: "Plum Pudding",
            count: "10"
        }
    ];

    var alreadyBought = [];
    service.bought = function (index) {
        alreadyBought.push(toBuy[index]);
        toBuy.splice(index, 1);
    }
    service.showBuy = function () {
        return toBuy;
    }
    service.showBought = function () {
        return alreadyBought;
    }
    service.emptyBought = function () {
        if (alreadyBought.length === 0) {
            return true;
        }
        else return false;
    }
});