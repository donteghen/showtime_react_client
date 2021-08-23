
import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Form, Input, Button, Checkbox, Spin, Modal} from 'antd'
import { useEffect, useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {validatePassword, validateEmail} from '../formvalidators/loginValidator'
import styled from 'styled-components';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const MainDiv= styled.div`
background: #0052D4;
background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); 
padding:60px 50px; height:100vh; width:100%;
`;
function LogIn ({auth, loginUser}) {
  const [email, setEmail] = useState({value:''})
  const [password, setPassword] = useState({value:''})
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  useEffect(() => {
    console.log(auth)
    if(auth) {
      history.push('/')
    }
  },[auth])
  function error() {
    Modal.error({
      title: 'Access Error!',
      content: 'Login failed. Please check the provided email and password and try again!',
    });
  }
  const onEmailChanged = (email) => {
    setEmail({...validateEmail(email), email})
  }
  const onPasswordChanged = (password) => {
    setPassword({...validatePassword(password), password})
  }
  const onFinish = (values) => {
    const details = {email : values.email, password : values.password}
    setLoading(true)
    loginUser(details, history).then(result => {
      console.log(result)
      if(!result.success){
        setLoading(false);
        error()
      }
    })
  };
    return (
      <Spin spinning={loading}>
        <MainDiv>
        <div style={{background:'white', alignItems:'center', padding:'40px 20px'}}>
            <div style={{textAlign:'center', margin:'30px 0'}}>
                <div style={{margin:'30px 0'}}><img src='' alt='logo'/></div>
                <h1>LOGIN</h1>
            </div>
            <div style={{maxwidth:'300px',margin:'0 auto'}}>
                <Form size='large'
              name="normal_login"
              style={{justifyItems:'center', alignSelf:'center', alignContent:'center'}}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              
            >
              <Form.Item
                rules={[{ required: true, message: 'Email is required!' }]}
                name="email" 
                validateStatus={email.validateStatus}
                help={email?.errorMsg}
              >
                <Input prefix={<MailOutlined  />} type='email' name='email'
                onChange={e => onEmailChanged(e.target.value)} placeholder="Email"  value={email.value}/>
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Password is required!' }]}
                name="password"
                validateStatus={password.validateStatus}
                help={password?.errorMsg}
              >
                <Input.Password
                  prefix={<LockOutlined />} name='password' value={password.value}
                  type="password" placeholder="Password" onChange={e => onPasswordChanged(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link to='/api/forgotPassword' style={{float:'right'}}>
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{marginRight:'4px'}} >
                  Log In
                </Button>
                Don't have an account yet? <Link to='/signup'>SignUp Now!</Link>
              </Form.Item>
              </Form>
            </div>
        </div>
      </MainDiv>
      </Spin>
    )
};
const mapStateToProps = state =>  ({auth:state.auth})
export default connect(mapStateToProps, actions)(LogIn)
