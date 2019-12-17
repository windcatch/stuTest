import React from 'react'
import "../css/login.scss"
import axios from "axios"
import { createHashHistory,createBrowserHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定
const history = createHashHistory();

let styles = {
    'loginDiv':{
        marginTop:"20px",
        width:'500px',
    },
    'marginTop':{
        marginTop:"20px"
    }
}

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            isFull:false
        }
    }
    handleLoginIn(){
        if(this.state.isFull){
            axios.interceptors.request.use((config) => {//发送请求之前
                config.withCredentials = true  //设置跨域
                return config
            }, (error) => {
                return Promise.reject(error)
            })
            axios.post('http://localhost:8888/Heimdall/login/',{
                username:document.getElementById("username").value,
                password:document.getElementById("password").value,
                // identityCode:document.getElementById("identityCode").value
            } ).then(res=>{
                history.push('/Index');
            }).catch(err=>{
                // this.props.history.push(Index)
                layui.use(['layer', 'form'], function(){
                    var layer = layui.layer;
                    layer.msg('登陆失败，请检查是否登陆信息有误');
                });
            });
            this.isFull()
        }else{
            document.getElementById("loginIn").setAttribute("disabled","true");
            layui.use(['layer', 'form'], function(){
                var layer = layui.layer;
                layer.msg('请补全登录信息');
            });
        }
    }
    isFull(){
        let obj={};
        obj.username=document.getElementById("username").value;
        obj.password=document.getElementById("password").value;
        // obj.identityCode=document.getElementById("identityCode").value;
        if(obj.username&&obj.password/*&&obj.identityCode*/){
            this.state.isFull=true
            document.getElementById("loginIn").removeAttribute("disabled");
        }else{
            this.state.isFull=false;
        }
    }
    render() {
        return (
            <div style={styles.loginDiv}>
                    <div className="input-group input-group-lg group">
                        <span className='input-group-addon'><span className=" glyphicon glyphicon-user"></span></span>
                        <input type='text' id="username" className='form-control input' onKeyUp={this.isFull.bind(this)} placeholder='请输入用户名'></input>
                    </div>
                    <div className='input-group input-group-lg group'>
                        <span className='input-group-addon'><span className="glyphicon glyphicon-lock"></span></span>
                        <input type='password' id="password" className='form-control input' onKeyUp={this.isFull.bind(this)} placeholder='请输入用户名'></input>
                    </div>
                    {/*<div className='input-group input-group-lg group'>*/}
                        {/*<span className='input-group-addon'><span className="glyphicon glyphicon-qrcode"></span></span>*/}
                        {/*<input type='password' id="identityCode" className='form-control input' onKeyUp={this.isFull.bind(this)} placeholder='请输入验证码'></input>*/}
                    {/*</div>*/}
                    <div className='btn-group group btn-group-lg col-lg-offset-3' style={styles.marginTop}>
                        <button className="btn btn-default" id="loginOut">登出</button>
                        <button className="btn btn-default" id="loginIn" onClick={this.handleLoginIn.bind(this)}>登录</button>
                        <button className="btn btn-default" id="verification">校验</button>
                    </div>
            </div>
        )
    }
}

export default Login;