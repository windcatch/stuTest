/**
 * Created by K0231266 on 2019/12/9.
 */
import "../css/main.css"
/* 导入自己写的css文件，不要用根目录"/" */
import "../node_modules/bootstrap/dist/js/bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/select2/dist/js/select2"
import "../node_modules/select2/dist/css/select2.css"
$("#select2_demo").select2(
    {
        placeholder: "----请选择----",
        // minimumInputLength: 1,
        ajax: {
            delay: 250, /*配置告诉select2在用户停止输入多少毫秒后开始查询，合理设置可以避免频繁向后端发送请求*/
            url: "http://localhost:8888/ServiceMonitor/route/routeManage/GateWayManagement/service/queryGroup",
            dataType: "json",
            method: 'POST',
            data: function (params) {
                return {
                    search: params.term,
                };
            },
            processResults: function (data) {/*请求结果*/
                var list=[];
                data.map(item => {
                    return item.groupName;
                }).forEach((item,index)=>{
                    list.push({"id":index,"text":item})
                });
                return {results: list}
            },
            cache: true
        }

    }
);
