import Mainbar from "./userEnd/containers/Mainbar";
import Sidebar from "./userEnd/containers/Sidebar";
import FooterContainer from "./userEnd/components/FooterContainer";
import { Layout} from 'antd';
import { useEffect, useState } from "react";
import HeaderContainer from "./userEnd/containers/HeaderContainer";
import { useDispatch, useSelector,connect } from "react-redux";
import {COLLAPSE_VIEW, EXPAND_VIEW} from './redux/reducers/mobileViewReducer'
import * as actions from './redux/actions'
const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  const dispatch = useDispatch()
  const mobile = useSelector(state => state.mobileView)
  const [mobileView, setMobileView] = useState(false)
 
  useEffect(() => {
    console.log(mobile)
    if(mobileView){
      dispatch(COLLAPSE_VIEW())
    }
    else{
      dispatch(EXPAND_VIEW())
    }
  }, [mobileView])
  return (
    <Layout style={{height:'100%', width:'100%'}}>
    <Sider theme='light'
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        
        setMobileView(broken)
      }}
      style={{
        height:'100vh',
        position:'fixed'
      }}
    >
      <div style={{height: '32px', margin: '16px', background: 'black'}}></div>
      <Sidebar/>
    </Sider>
    
    <Layout style={{marginLeft:`${mobile ? '1px' : '200px'}`}}>
      <Header  style={{ padding: `${mobile ? '0 30px' : '0 10px'}`, background: '#fff', zIndex:'5', width:'100%', position:'fixed'}}>
        <HeaderContainer />
      </Header>
      <Content style={{ color:'red', overflow: 'initial', marginTop: '60px'}} >
        <div  style={{ padding: '40px 10px', background: '#fff' }}>
            <Mainbar />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', background:'#fff' }}><FooterContainer /></Footer>
    </Layout>
  </Layout>
  )
}
//const mapStateToProps = state => ({auth:state.auth})
export default Dashboard
