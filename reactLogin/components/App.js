/**
 * 设置路由
 */
import React from "react"
import {HashRouter as Router,Route,Link,BrowserRouter  ,Switch,Redirect} from 'react-router-dom';
import Login from "./Login"
import Index from "./Index"

class App extends React.Component{
    render(){
        return (
            <Router>

                <Route exact path='/' component={Login}/>

                <Route path='/Index' component={Index}/>

            </Router>
        )
    }
}

export default App