var url="http://www.test.com";
Mock.mock(url, {
    "userInfo|4": [{
        "id|+1": 1,
        "name": "@cname",
        "ago|18-28": 25,
        "sex|1": ["男", "女"],
        "job|1": ["web", "UI", "pyhthon", "php"],
        "img":'@Image()'
    }]
})

$.get(url,function(data){
    console.log(JSON.parse(data));
})