
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {Form, Input, Button, Checkbox} from 'antd'
import { useEffect } from 'react'
import {useHistory, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

function SignUp ({auth, loginUser}) {
  const history = useHistory()
  // useEffect(() => {
  //   if(auth) {
  //     history.push('/')
  //   }
  // })
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
    return (
      <div>
        <div>

        </div>
        <div>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
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
    )
};
const mapStateToProps = state =>  ({auth:state.auth})
export default connect(mapStateToProps, actions)(SignUp)

