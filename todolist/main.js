import React from "react"
import ReactDOM from "react-dom"

import App from "./app/components/App"

let data =[
    {id:0,text:'天气不错!!!',complete:false,deleteFlag:false},
    {id:1,text:'天气不错!!!',complete:false,deleteFlag:false},
    {id:2,text:'出去玩啊!!!',complete:true,deleteFlag:false},
]

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('app')
)