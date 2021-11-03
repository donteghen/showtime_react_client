
import {Menu} from 'antd'
import { LoginOutlined, LogoutOutlined, CompassOutlined, HeartOutlined, LikeOutlined, SettingOutlined } from '@ant-design/icons';
import {NavLink, useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
import { useEffect, useState } from 'react';
//import { useEffect } from 'react';

const styles = {
    menuItems : {
        margin:0, paddingLeft:'30px', paddingRight:'30px', paddingBottom:'30px', paddingTop:'30px'
    }
}
function Sidebar ({auth, logoutUser}) {
    const history = useHistory()
    const [selected, setSelected] = useState('')
    useEffect(() => {
        const defaultItem = history.location.pathname.split('dashboard/')[1]
        setSelected(defaultItem)
    },[])

    return (
      
      <Menu theme="light" mode="inline"  selectedKeys={[selected]} onSelect={({ key }) => setSelected(key)}>
        <Menu.Item key="browse" icon={<CompassOutlined />} style={styles.menuItems}>
            <NavLink to='/dashboard/browse'>Browse</NavLink> 
        </Menu.Item>
        <Menu.Item key="watchlist" icon={<HeartOutlined />} style={styles.menuItems}>
            <NavLink to='/dashboard/watchlist'>WatchList</NavLink>
        </Menu.Item>
        <Menu.Item key="liked" icon={<LikeOutlined />} style={styles.menuItems}>
            <NavLink to='/dashboard/liked'>Liked</NavLink>
        </Menu.Item>
        <div style={{borderBottom:'1px dashed lightgrey', width:'100%', margin:'30px 0'}}></div>
        {auth && auth._id ? (
            <><Menu.Item key="settings" icon={<SettingOutlined />} style={styles.menuItems}>
            <NavLink to='/dashboard/settings'>Settings</NavLink>
        </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} style={styles.menuItems}>
            <span onClick={() => logoutUser(history)}>LogOut</span>
        </Menu.Item></>) : 
        (<Menu.Item key="login" icon={<LoginOutlined />} style={styles.menuItems}>
            <NavLink to='/login'>LogIn</NavLink>
        </Menu.Item>)}
      </Menu>
    )
  }
  const mapStateToProps = (state) => ({auth:state.auth})
  export default connect(mapStateToProps, actions)(Sidebar) ;
  