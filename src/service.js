angular.module('ServiceModule',[])
.service('dataList',function(){

    this.list = [ //初始化购物车的数据
      {
        id: '0',
        name: '洗衣机',
        num: '1',
        oneprice: '900',
        price: '',
        Bol:false
      },
      {
        id: '1',
        name: '热水器',
        num: '1',
        oneprice: '110',
        price: '',
        Bol:false
      },
      {
        id: '2',
        name: '空调',
        num: '1',
        oneprice: '116',
        price: '',
        Bol:false
      },
      {
        id: '3',
        name: '冰箱',
        num: '1',
        oneprice: '2087',
        price: '',
        Bol:false
      },
      {
        id: '4',
        name: '电磁炉',
        num: '1',
        oneprice: '135',
        price: '',
        Bol:false
      },
      {
        id: '5',
        name: '被子',
        num: '1',
        oneprice: '50',
        price: '',
        Bol:false
      },
      {
        id: '6',
        name: '本子',
        num: '1',
        oneprice: '2',
        price: '',
        Bol:false
      },
      {
        id: '7',
        name: '笔',
        num: '1',
        oneprice: '115',
        price: '',
        Bol:false
      },
      {
        id: '8',
        name: '杯子',
        num: '1',
        oneprice: '12',
        price: '',
        Bol:false
      },
      {
        id: '9',
        name: '书',
        num: '1',
        oneprice: '5',
        price: '',
        Bol:false
      },
      {
        id: '10',
        name: '零食',
        num: '1',
        oneprice: '13',
        price: '',
        Bol:false
      }
    ];
})
