import { Avatar, Row, Col, Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import {connect} from 'react-redux';
import styled from 'styled-components'


const SPAN = styled.span`
    padding: 10px 20px;
    margin: 4px 4px;
    background-color:#1f8ffb;
    border-radius:25px;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
`;
const HeaderContainer = ({auth, mobileView}) => {

    return ( 
    <Row justify={'space-around'}>
        <Col span={8}><Input style={{borderRadius:'15px'}} size="large" placeholder="Search..." prefix={<SearchOutlined />} /></Col>
         {auth && auth._id ? (<Col span={4}><Avatar size={60} src={auth.avatar}/></Col>) :
         (<Col span={4} style={{marginRight:`${mobileView ? '80px' : '120px'}`}}> 
         <SPAN>SignUp</SPAN>
         <SPAN>LogIn</SPAN>
         </Col>)}
    </Row>
    )
}
const mapStateToProps = (state) => ({auth:state.auth, mobileView:state.mobileView})
export default connect(mapStateToProps)(HeaderContainer)