/**
 * Created by catchWind on 2019/12/12.
 */
import React from "react"
import "../css/prism.css"
import "../js/prism"
import { createHashHistory,createBrowserHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定
const history = createHashHistory();
import axios from "axios"

let styles={
        "btnGroup":{
            left: '10%'
        }
    };
class Index extends React.Component{
    handleLoginOut(){
        history.push("/")
    }
    handleValidata(){
        // axios.interceptors.request.use((config) => {//发送请求之前
        //     config.withCredentials = true     //设置跨域 有可能会报重复跨域问题，即后端也设置了解决跨域的响应头
        //     return config
        // }, (error) => {
        //     return Promise.reject(error)
        // })
        axios.get('http://localhost:8888/test/testservice/validateForTestHeimdall/').then(function (res) {
            $("#validateCode").text(res)
        }).catch(function (err) {
            $("#validateCode").text(err)
        })
    }
    render(){
        return (
            <div>
                <pre>验证码：<code className="language-javascript" id="validateCode"></code></pre>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <div className="btn-group" style={styles.btnGroup}>
                    <button className="btn btn-danger" id="loginOut" onClick={this.handleLoginOut}>登出</button>
                    <button className="btn btn-warning" id="validate" onClick={this.handleValidata}>校验</button>
                </div>
            </div>
        )
    }
};

export default Index;
