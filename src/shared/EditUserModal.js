import { createRef, useState } from "react";
import { Modal, Form, Input, Button, Spin } from "antd";
import {UserOutlined, MailOutlined} from '@ant-design/icons'
import { connect } from "react-redux";
import * as actions from '../redux/actions'
import {validateName, validateEmail} from '../formvalidators/editUserValidator'

    const EditUserModal = ({Show, SetShow, auth, updateUserProfile, uploadAvatar}) => {
    const [email, setEmail] = useState({value:''})
  const [name, setName] = useState({value:''})
  const [loading, setLoading] = useState(false)
  const formRef = createRef()
  const onReset = () => {
    formRef.current.resetFields();
  };
    const onNameChanged = (name) => {
        setName({...validateName(name), name})
      }
      const onEmailChanged = (email) => {
        setEmail({...validateEmail(email), email})
      }
      function error() {
        Modal.error({
          title: 'Access Error!',
          content: 'Registration failed. Please check the provided information and try again!',
        });
      }
      const onFinish = (values) => {
        const details = {name:values.name, email : values.email}
        setLoading(true)
        updateUserProfile(details).then(result => {
            setLoading(false);
          if(!result.success){
            error()
          }
        })
        SetShow(false)
      };
    const handleOk = () => {
        document.getElementById('submit').click()
    };
    const handleCancel = () => {
        onReset()
      SetShow(false);
    };
    return (
      <>
        <Modal title="Basic Modal" visible={Show} onOk={handleOk} onCancel={handleCancel}>
        <Spin spinning={loading} style={{zIndex:'100'}}>
        <div>
        <Form size='large'
              name="normal_login"
              style={{justifyItems:'center', alignSelf:'center', alignContent:'center'}}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              ref={formRef}
            >
            <Form.Item
                rules={[{ required: true, message: 'Name is required!' }]}
                name="name" 
                validateStatus={name.validateStatus}
                help={name?.errorMsg}
              >
                <Input prefix={<UserOutlined />} type='text' name='name' defaultValue={auth?.name}
                onChange={e => onNameChanged(e.target.value)} placeholder="Name"  value={name.value}/>
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Email is required!' }]}
                name="email" 
                validateStatus={email.validateStatus}
                help={email?.errorMsg}
              >
                <Input prefix={<MailOutlined  />} type='email' name='email' defaultValue={auth?.email}
                onChange={e => onEmailChanged(e.target.value)} placeholder="Email"  value={email.value}/>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{display:'none'}}>
                    <Button type="primary" htmlType="submit" id='submit'>
                        Submit
                    </Button>
                </Form.Item>
              </Form>
        </div>
        </Spin>
        </Modal>
        
      </>
    );
  };
  const mapStateToProps = state => ({auth : state.auth})
  export default connect(mapStateToProps, actions)(EditUserModal)