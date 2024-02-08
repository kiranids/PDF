import React from 'react';
import { Form, Input, Select, Slider, Rate, Switch, Button, DatePicker } from 'antd';

const { Option } = Select;

const UserInfoForm = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please select your gender' }]}
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Please select your date of birth' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please enter your age' }]}
          >
            <Slider />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: 'Please rate' }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            label="Active"
            name="active"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Education Level"
            name="educationLevel"
            rules={[{ required: true, message: 'Please select your education level' }]}
          >
            <Select>
              <Option value="highSchool">High School</Option>
              <Option value="bachelor">Bachelor's Degree</Option>
              <Option value="master">Master's Degree</Option>
              <Option value="phd">Ph.D.</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: 'Please enter your country' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Interests"
            name="interests"
            rules={[{ required: true, message: 'Please enter your interests' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserInfoForm;
