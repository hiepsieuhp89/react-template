import React, { useState } from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Col, Divider, Row, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { LaptopOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const ComputerList = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <LaptopOutlined />,
              label: "Quan ly may tinh",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Quan ly nguoi dung",
            },
            {
              key: "3",
              icon: <LogoutOutlined />,
              label: <div className="btn-dangxuat">Dang xuat</div>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            overflow: "scroll",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <DanhSachMayTinh />
        </Content>
      </Layout>
    </Layout>
  );
};

function renderMayTinh(element, index) {
  const thuTu = index + 1;

  const thuTuChan = thuTu % 2 == 0;

  const ActiveElement = thuTuChan ? (
    <div className="active-status">Active</div>
  ) : (
    <div className="disable-status">Disable</div>
  );

  return (
    <Col key={index} className="gutter-row" span={6}>
      <Card
        hoverable
        style={{
          width: 360,
        }}
        cover={
          <img
            alt="example"
            src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1844/2017/05/09232357/desktop-win7.png"
          />
        }
      >
        <Meta title="May 12" description={ActiveElement} />
      </Card>
    </Col>
  );
}
const DanhSachMayTinh = () => (
  <>
    <Row gutter={[24, 24]}>{Array(20).fill(null).map(renderMayTinh)}</Row>
  </>
);

export default ComputerList;
