import React,{Component} from 'react'

import {BrowserRouter,Route,Switch} from 'react-router-dom'

// 这样写也是可以的,可以自动匹配到index
// import Login from './pages/login'

// import Login from './pages/login/index'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

// App可以说是根组件 设置路由