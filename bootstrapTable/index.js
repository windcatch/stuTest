$(function () {
    $.get('20191203mock.html/randomwriting?token=wch924', function (data) {
        listInfo = JSON.parse(data).userInfo;
        var oTableInit = new TableInit();
        oTableInit.Init(listInfo);
    })
});
var TableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function (data) {
        $("#addFieldMappingTable").bootstrapTable({
            url: '',
            method: 'get',
            // search: true,
            /* 默认false不显示表格右上方搜索框 ，可设为true，在搜索框内只要输入内容即开始搜索 */
            columns: [{
                field: 'id',
                title: 'ID',
                sortable: true
            }, {
                field: 'name',
                title: '姓名'
            }, {
                field: 'age',
                title: '年龄',
                sortable: true
            }, {
                field: 'sex',
                title: '性别'
            }, {
                field: 'job',
                title: '工作岗位'
            }, {
                field: 'img',
                title: '头像'
            }, {
                field: 'operate',
                title: '操作',
                width: 300,
                align: 'center',
                valign: 'middle',
                formatter: actionFormatter
            }],
            cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true, //是否显示分页（*）
            sortable: true, //是否启用排序
            // sortOrder: "asc", //排序方式
            sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1, //初始化加载第一页，默认第一页
            pageSize: 10, //每页的记录行数（*）
            pageList: [10, 25, 50], //可供选择的每页的行数（*）
            search: false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            searchOnEnterKey: true,
            trimOnSearch: true,
            strictSearch: true,
            showColumns: false, //是否显示下拉按钮
            showRefresh: false, //是否显示刷新按钮
            minimumCountColumns: 2, //最少允许的列数
            clickToSelect: false, //是否启用点击选中行
            // height: 500, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "id", //每一行的唯一标识，一般为主键列
            showToggle: false, //是否显示详细视图和列表视图的切换按钮
            cardView: false, //是否显示详细视图
            detailView: false, //是否显示父子表
            showExport: true, //是否显示导出
            buttonsAlign: "right",
            data: data
        });
    }
    return oTableInit;
}

function actionFormatter(value, row, index) {
    //操作栏的格式化,value代表当前单元格中的值，row代表当前行数据，index表示当前行的下标
    var id = index;
    var data = JSON.stringify(row);
    var result = "";
    result += "<a href='javascript:;' class='btn btn-xs green' onclick=\"EditViewById('" + id + "', view='view')\" title='查看'><span class='glyphicon glyphicon-search'>查看</span></a>";
    result += "<a href='javascript:;' class='btn btn-xs blue' onclick=\"EditViewById('" + row + "','" + id + "')\" title='编辑'><span class='glyphicon glyphicon-pencil'>编辑</span></a>";
    result += "<a href='javascript:;' class='btn btn-xs red' onclick=\"DeleteByIds('" + id + "')\" title='删除'><span class='glyphicon glyphicon-remove'>删除</span></a>";
    return result;
}
function EditViewById(row,index){
    var data =JSON.stringify($('#addFieldMappingTable').bootstrapTable('getData'));//获取全部数据
    var data_json=JSON.parse(data);
    // console.log(data_json);
    console.log(row,index)
}