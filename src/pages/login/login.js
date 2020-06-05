import React,{Component} from 'react'
import { Form, Input, Button } from 'antd';

import './login.less'
import xl from './images/xiaoliao.png'

const {Item} = Form;

export default class Login extends Component{
    render(){
        return (
            <div className="loginBack">
                <div className="loginPane">
                    <div className="top">
                        <img src={xl} alt=""/>
                        <span>撩课-后台管理系统</span>
                    </div>
                    <div className="form">
                        <Form>
                            <Item>
                                <Input placeholder="请输入账号" />

                            </Item>
                            <Item>
                                <Input type="password" placeholder="请输入密码" />

                            </Item>
                            <Item>
                                <Button type="primary" htmlType="submit" className="loginBtn">
                                    登录
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}