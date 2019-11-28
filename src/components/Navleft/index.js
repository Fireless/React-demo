import React from 'react'
import MenuConfig from './../../config/menuconfig'
import { Menu } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu
export default class Navleft extends React.Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if (item.children){
                return (
                    <SubMenu  title= {item.title} key={item.key}>
                         { this.renderMenu(item.children) }
                    </SubMenu>
                 )
                 
            }
        return  <Menu.Item  title={ item.title } key={ item.key}>{item.title}</Menu.Item> 
        })
    }
    render() {

        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo192.png' alt='' />
                    <h1>SDK PIPELINE</h1>
                </div>

                <Menu theme= "dark">
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}