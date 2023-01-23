import { Card, Layout, Menu, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./styles/dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";

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
              </Card> <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />

                  <small>Total sales</small>
                </Space>
                <Typography.Title>$23456</Typography.Title>
              </Card>
            </Space>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
