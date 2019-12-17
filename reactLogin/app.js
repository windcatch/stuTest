import React from "react"
/*react核心代码*/
import ReactDOM  from "react-dom"
/*react-dom是将虚拟DOM传到页面中*/
import App from "./components/App"



ReactDOM.render(
    <App/>,
    document.getElementById('catchWind')
)