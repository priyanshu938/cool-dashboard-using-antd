import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  Table,
  Tag,
  Typography,
  TimePicker,
  Empty,
  Modal,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./styles/dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
// import { Anchor } from "antd";
import { faker } from "@faker-js/faker";
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";

const generateData = () => {
  const dat = [];
  for (let i = 0; i < 34; i++) {
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false,
    });
  }
  return dat;
};
const data = generateData();
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Layout className="container">
        <Header
          style={{
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <GiHamburgerMenu
              size={28}
              style={{ marginRight: 20 }}
              onClick={() => setCollapsed(!collapsed)}
            />
            <div className="brand">Cool-dashboard</div>
          </div>
        </Header>
        <Layout>
          <Sider theme="light" collapsed={collapsed}>
            <Menu
              mode="inline"
              items={[
                {
                  label: "Home",
                  key: "home",
                  icon: <HiOutlineHome />,
                  children: [
                    {
                      label: "Add profile",
                      key: "add_profile",
                      icon: <BsPerson />,
                    },
                    {
                      label: "Add users",
                      key: "add_users",
                      icon: <BsPerson />,
                    },
                  ],
                },
                {
                  label: "About Us",
                  key: "about-us",
                  icon: <GrOrganization />,
                },
              ]}
            />
          </Sider>
          <Content className="content">
            <Space direction="horizontal">
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />

                  <small>Total sales</small>
                </Space>
                <Typography.Title>$23456</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />

                  <small>Total sales</small>
                </Space>
                <Typography.Title>$23456</Typography.Title>
              </Card>{" "}
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />

                  <small>Total sales</small>
                </Space>
                <Typography.Title>$23456</Typography.Title>
              </Card>{" "}
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$23456</Typography.Title>
              </Card>
            </Space>
            <Divider />
            <Card>
              <Button
                type="primary"
                onClick={() => setModalOpen(true)}
                // onClick={() => {
                //   Modal.confirm({
                //     title: "Do you want to delete these items?",
                //     content:
                //       "When clicked the OK button, this dialog will be closed after 1 second",
                //   });
                // }}
              >
                Open form
              </Button>
              <Empty />
              <Modal open={modalOpen} onCancel={() => setModalOpen(false)}>
                <Form
                  onFinish={(values) => {
                    console.log(values);
                  }}
                  layout="vertical"
                >
                  <Form.Item name="name" label="Name">
                    <Input />
                  </Form.Item>
                  <Form.Item name={"email"} label="Email">
                    <Input type="email" />
                  </Form.Item>
                  <Form.Item name="password" label="Password">
                    <Input type="password" />
                  </Form.Item>
                  <Form.Item name="time" label="Pick some time">
                    <TimePicker
                      defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" type="primary">
                      Sign up
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </Card>
            {/*            
            <Row gutter={10}>
              <Col span={6}>
                <Card>
                  <Typography.Title level={4}>Sales</Typography.Title>
                </Card>
              </Col>
              <Col span={18}>
                <Card>
                  <Anchor
                    // affix={false}
                    // onClick={handleClick}
                    items={[
                      {
                        key: "1",
                        href: "#components-anchor-demo-basic",
                        title: "Basic demo",
                      },
                      {
                        key: "2",
                        href: "#components-anchor-demo-static",
                        title: "Static demo",
                      },
                      {
                        key: "3",
                        href: "#api",
                        title: "API",
                        children: [
                          {
                            key: "4",
                            href: "#anchor-props",
                            title: "Anchor Props",
                          },
                          {
                            key: "5",
                            href: "#link-props",
                            title: "Link Props",
                          },
                        ],
                      },
                    ]}
                  />
                </Card>
              </Col>
            </Row>
            */}
            <Row gutter={10} style={{ marginTop: 10 }}>
              <Col span={18}>
                <Table
                  dataSource={data}
                  columns={[
                    {
                      dataIndex: "id",
                      title: "ID",
                      key: "id",
                    },
                    {
                      dataIndex: "name",
                      title: "name",
                      key: "name",
                    },
                    {
                      dataIndex: "email",
                      title: "Email Id",
                      key: "email",
                    },
                    {
                      dataIndex: "status",
                      title: "Status",
                      key: "status",
                      render: (val) =>
                        val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>,
                    },
                    {
                      title: "ACtions",
                      render: () => (
                        <ButtonGroup>
                          <Button>Edit</Button>
                          <Button type="primary" danger>
                            Delete
                          </Button>
                        </ButtonGroup>
                      ),
                    },
                  ]}
                />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
