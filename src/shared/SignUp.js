
import {MailOutlined, LockOutlined, UserOutlined} from '@ant-design/icons'
import {Form, Input, Button, Checkbox, Spin, Modal} from 'antd'
import { useEffect, useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {validatePassword, validateEmail, validateName} from '../formvalidators/signupValidator'
import styled from 'styled-components';


const MainDiv= styled.div`
background: #0052D4;
background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); 
padding:60px 50px; height:100vh; width:100%;
`;
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

function SignUp ({auth, signupUser}) {
  const [email, setEmail] = useState({value:''})
  const [password, setPassword] = useState({value:''})
  const [name, setName] = useState({value:''})
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if(auth) {
      history.push('/')
    }
  },[auth])
  function error() {
    Modal.error({
      title: 'Access Error!',
      content: 'Registration failed. Please check the provided information and try again!',
    });
  }
  const onNameChanged = (name) => {
    setName({...validateName(name), name})
  }
  const onEmailChanged = (email) => {
    setEmail({...validateEmail(email), email})
  }
  const onPasswordChanged = (password) => {
    setPassword({...validatePassword(password), password})
  }
  const onFinish = (values) => {
    const details = {name:values.name, email : values.email, password : values.password}
    setLoading(true)
    signupUser(details, history).then(result => {
      
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
                <h1>SIGNUP</h1>
            </div>
            <div style={{maxwidth:'300px',margin:'0 auto'}}>
                <Form size='large'
              name="normal_login"
              style={{justifyItems:'center', alignSelf:'center', alignContent:'center'}}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              
            >
            <Form.Item
                rules={[{ required: true, message: 'Name is required!' }]}
                name="name" 
                validateStatus={name.validateStatus}
                help={name?.errorMsg}
              >
                <Input prefix={<UserOutlined />} type='text' name='name'
                onChange={e => onNameChanged(e.target.value)} placeholder="Name"  value={name.value}/>
              </Form.Item>
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
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Must agree to terms!')),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I agree to the <Link to=''>terms</Link>
                </Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{marginRight:'4px'}} >
                  Sign Up
                </Button>
                Have an account already? <Link to='/login'>Log In</Link>
              </Form.Item>
              </Form>
            </div>
        </div>
      </MainDiv>
      </Spin>
    )
};
const mapStateToProps = state =>  ({auth:state.auth})
export default connect(mapStateToProps, actions)(SignUp)
