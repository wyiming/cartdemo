angular.module('ControllerModule',['ServiceModule'])
.controller('myAngular', ['$scope', 'dataList' ,function ($scope,dataList) {

  $scope.dataList = dataList.list;

  //总价格的计算
  $scope.allPrices = function () {
    $scope.allprice = 0;
    angular.forEach($scope.dataList, function (data, index, array) {
      data.price = data.num * data.oneprice;
      if (data.Bol == true) {
        $scope.allprice += parseInt(data.price);
      }
    })
    return $scope.allprice;
  };

}])
