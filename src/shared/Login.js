
import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Form, Input, Button, Checkbox} from 'antd'
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {validatePassword, validateEmail} from '../formvalidators/loginValidator'
import styled from 'styled-components'
const MainDiv= styled.div`
background: #0052D4;
background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); 
padding:60px 50px; height:100vh; width:100%;
`;
function LogIn ({auth, loginUser}) {
  const [email, setEmail] = useState({value:''})
  const [password, setPassword] = useState({value:''})
  //const history = useHistory()
  // useEffect(() => {
  //   if(auth) {
  //     history.push('/')
  //   }
  // })
  
  const onEmailChanged = (email) => {
    setEmail({...validateEmail(email), email})
  }
  const onPasswordChanged = (password) => {
    setPassword({...validatePassword(password), password})
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
    return (
      <MainDiv>
        <div style={{background:'white', alignItems:'center', padding:'40px 20px'}}>
            <div style={{textAlign:'center', margin:'30px 0'}}>
                <div style={{margin:'30px 0'}}><img src='' alt='logo'/></div>
                <h1>Login Into Your Dashboard</h1>
            </div>
            <div style={{maxwidth:'300px',margin:'0 auto'}}>
                <Form size='large'
              name="normal_login"
              style={{justifyItems:'center', alignSelf:'center', alignContent:'center'}}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email" 
                validateStatus={email.validateStatus}
                help={email?.errorMsg}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} type='email' name='email'
                onChange={e => onEmailChanged(e.target.value)} placeholder="Email"  value={email.value}/>
              </Form.Item>
              <Form.Item
                name="password"
                validateStatus={password.validateStatus}
                help={password?.errorMsg}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />} name='password' value={password.value}
                  type="password" placeholder="Password" onChange={e => onPasswordChanged(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link to='/api/forgotPassword'>
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <Link to='/signup'>SignUp Now!</Link>
              </Form.Item>
              </Form>
            </div>
        </div>
      </MainDiv>
    )
};
const mapStateToProps = state =>  ({auth:state.auth})
export default connect(mapStateToProps, actions)(LogIn)
