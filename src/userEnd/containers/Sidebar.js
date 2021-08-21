
import {Menu} from 'antd'
import { LoginOutlined, LogoutOutlined, CompassOutlined, HeartOutlined, LikeOutlined, SettingOutlined } from '@ant-design/icons';
import {NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
const styles = {
    menuItems : {
        margin:0, paddingLeft:'30px', paddingRight:'30px', paddingBottom:'30px', paddingTop:'30px'
    }
}
function Sidebar ({auth, logoutUser}) {
    return (
      
      <Menu theme="light" mode="inline" defaultSelectedKeys={['browse']} >
        <Menu.Item key="browse" icon={<CompassOutlined />} style={styles.menuItems}>
            <NavLink to='/browse'>Browse</NavLink> 
        </Menu.Item>
        <Menu.Item key="watchlist" icon={<HeartOutlined />} style={styles.menuItems}>
            <NavLink to='/watchlist'>WatchList</NavLink>
        </Menu.Item>
        <Menu.Item key="liked" icon={<LikeOutlined />} style={styles.menuItems}>
            <NavLink to='/liked'>Liked</NavLink>
        </Menu.Item>

        <Menu.Item key="settings" icon={<SettingOutlined />} style={styles.menuItems}>
            <NavLink to='/settings'>Settings</NavLink>
        </Menu.Item>
        {auth && auth._id ? (<Menu.Item key="logout" icon={<LogoutOutlined />} style={styles.menuItems}>
            <span>LogOut</span>
        </Menu.Item>) : 
        (<Menu.Item key="login" icon={<LoginOutlined />} style={styles.menuItems}>
            <span>LogIn</span>
        </Menu.Item>)}
      </Menu>
    )
  }
  const mapStateToProps = (state) => ({auth:state.auth})
  export default connect(mapStateToProps, actions)(Sidebar) ;
  