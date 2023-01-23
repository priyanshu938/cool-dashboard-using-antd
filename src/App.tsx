import { Card, Col, Divider, Layout, Menu, Row, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./styles/dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { Anchor } from "antd";

function App() {
  const [collapsed, setCollapsed] = useState(false);
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
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
