import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Title } = Typography;


const Forget = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Title level={2}>Login</Title>
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your recovery email!' }]}
      >
        <Input prefix={<MailFilled className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
   

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/login">Back to login </Link>
      </Form.Item>
    </Form>
  );
};

export default Forget;
