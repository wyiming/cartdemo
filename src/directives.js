angular.module('DirectiveModule',[])
.directive('myAdds', function () {
  return {
    link: function (scope, element, attr) {
      element.click(function () {
        var This = this
        angular.forEach(scope.dataList, function (data, index, array) {
          if(attr.dataid == data.id) {
            data.num = parseInt(data.num) + 1;
            scope.allPrices();
            scope.$apply() //刷新视图
          }
        });
      });
    }
  }
})
//购物车 减
.directive('myMinus', function () {
  return {
    link: function (scope, element, attr) {
      element.click(function () {
        var This = this
        angular.forEach(scope.dataList, function (data, index, array) {

          if (attr.dataid == data.id) {

            if (data.num <= 1) {

              if (confirm('是否删除该产品')) {
                data.num = 0;
                $(This).siblings('input').val(0);
                scope.allPrices();
                scope.$apply();
                //delete array[index];
                scope.dataList.splice(index, 1)
                $(This).parents('tr').remove();
              }

            } else {
              data.num = parseInt(data.num) - 1;
            };

            scope.allPrices();
            scope.$apply();
          }
        });
      });
    }
  }
})
//全选，全不选
.directive('allOrcan', function () {
  return function (scope, element, attr) {
    element.click(function () {
      var isCheck = $(this).find('input').prop('checked');
      if (isCheck) {
        angular.element('input[type=checkbox]').prop('checked', true);
      } else {
        // 除第一个外，全部改为false

        angular.element('input[type=checkbox]').not($('input[type=checkbox]').eq(0)).prop('checked', false);
      }
      angular.forEach(scope.dataList, function (data, index, array) {
        data.Bol = isCheck;
      })
      scope.allPrices();
      scope.$apply();
    })
  }
})
//单选
.directive('oneCheck', function () {
  return function (scope, element, attr) {
    element.click(function () {
      var This = this
      angular.forEach(scope.dataList, function (data, index, array) {
        if (attr.dataid == data.id) {
          var isCheck = $(This).prop('checked');
          data.Bol = isCheck;
          scope.allPrices();
          scope.$apply();
        }

        angular.element('input[type=checkbox]').eq(0).prop('checked', true);
        angular.forEach(scope.dataList, function (data, index, array) {
            if(!data.Bol){
              angular.element('input[type=checkbox]').eq(0).prop('checked', false);
            }else{
            }
        })

      })
    });
  }
})
