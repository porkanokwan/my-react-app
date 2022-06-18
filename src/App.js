import React from "react";
// import { Button, Row, Col } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

function App() {
  // เมื่อเรากรอกข้อมูลใน form แล้ว กด submit function onFinish จะทำงาน ซึ่ง antd จะทำการ group ค่า key(ชื่อ name ของ input นั้น) - value (ข้อมูลที่เรากรอก) ทุกอันใน form มาเก็บเป็น obj แล้วส่งให้ parameter value ใน function onFinish เก็บ
  const onFinish = (value) => {
    console.log(value); // value คือ obj ที่เก็บค่าทั้งหมดที่อยู่ใน form ที่ antd ส่งมาให้แบบนี้ {username: 'kanokwan', password: '123456', remember: true}
  };
  return (
    // <div>
    //    {/* <Button type="primary" block size='large'>
    //     Primary
    //   </Button> */}

    //   {/* Row เป็น flex อัตโนมัติ ทำให้ Col เป็น flex item ดังนั้น ถ้าจะจัดตำแหน่ง Col ในหน้าจอ ใช้ justify property เป็นตัวกำหนดได้ เพราะเป็น flex อยู่แล้ว */}
    //   <Row justify='end' align='bottom'>
    //     {/* หน้าจอนึงแบ่งเป็น 24 ส่วน span เป็นตัวกำหนดว่า col นี้จะกว้างเป็นกี่ส่วนในหน้าจอโดยใช้ span ตัวอย่างนี้กว้างเป็น 1 ใน 4 ของหน้าจอ */}
    //     <Col span={6} style={{ backgroundColor: 'red' }}>
    //       First Span
    //     </Col>
    //     {/* offset คือการเว้นที่ว่าง ในตัวอย่างนี้เว้นออกไป 6 ช่อง ทำให้ Col โดนดันออกไป 6 ช่อง */}
    //     {/* <Col span={12} style={{ backgroundColor: 'green' }} offset={6}> */}
    //     <Col span={12} style={{ backgroundColor: 'green' }}>
    //       Second Span
    //     </Col>
    //   </Row>
    // </div>

    <Layout>
      <Header className="header" style={{ backgroundColor: "red" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }} // ความกว้างของ label กินไป 8 ส่วนจาก 24
              wrapperCol={{ span: 16 }} // ความกว้างของที่เหลือ เป็น 16 ส่วนจาก 24 (labelCol + wrapperCol รวมกันต้องได้ 24)
              initialValues={{ remember: true }}
              onFinish={onFinish} // เหมือน onSubmit
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username" // name จะเป็น state ที่จะเก็บค่า value จาก input นี้เลย เราไม่ต้องกำหนด state เพื่อมาเก็บค่าเพิ่ม
                rules={[
                  { required: true, message: "Please input your username!" },
                ]} // rules ใช้ในการ valid input นี้
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Invalid length" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
