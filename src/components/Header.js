import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Link } from 'react-router-dom'

import { Menu, Icon ,Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
  state = {
    current: 'mail',
    theme : 'dark'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  render() {
    return (
      <div>
      
      <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

            
           
        <Menu.Item style={{padding:'10px'}}>
         <Link to='/'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item style={{padding:'10px'}}>
          <Link to='/theme'>My Themes</Link>
        </Menu.Item>
        <Menu.Item style={{padding:'10px'}} >
         <Link to='/create'>Create</Link>
        </Menu.Item>
      
        <SubMenu title={<span><Icon type="setting" />Ramaiah Raj G</span>} style={{float: 'right',padding:'10px'}}>
          <MenuItemGroup>
            <Menu.Item key="setting:1"><Link to='/'>Dashboard</Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to='/theme'>My Themes</Link></Menu.Item>
            <Menu.Item key="setting:3"><Link to='/create'>Create</Link></Menu.Item>
            <Menu.Item key="setting:4">
           Log out
         </Menu.Item>
          </MenuItemGroup>
         
        </SubMenu>
     
        
        <Menu.Item style={{float: 'right',padding:'10px'}} >
         
         <Link to='/watchlist'><Icon type="eye" /> Watch List </Link>
        </Menu.Item>
         <Menu.Item style={{float: 'right',padding:'10px'}} >
         
         <Link to='/investments'>Investments</Link>
        </Menu.Item>
        <Menu.Item style={{float: 'right',padding:'10px'}} >
         
         <Link to='/bell'><Icon type="bell" /></Link>
        </Menu.Item>
        
        
      </Menu>
      </div>
    );
  }
}


export default Header