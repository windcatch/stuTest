var url = "20191203mock.html/randomwriting?token=wch924"
Mock.mock(url, {
    'userInfo|1000': [{
        'id|+1':1,
        'name':'@cname',
        'age|18-45':30,
        'sex|1':['男','女'],
        'job|1': ["web", "UI", "pyhthon", "php"],
        'img':'@image()'
    }]
});
/* 产生一个虚拟数据的url  可以让本地前端get请求到数据 */