import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  FireFilled,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Layout, Menu } from "antd";
import Navbar from "../../components/navbar/";
import logoImage from "../../assets/logo.png"; // Import the image

const { Header, Content, Sider } = Layout;

const index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const customColor = "#ffffff"; // Set your preferred color here
  const location = useLocation();

  const userItems = [
    {
      label: "Reports",
      key: "dashboard",
      icon: <PieChartOutlined />,
      link: "/dashboard/report",
    },
    {
      label: "Graphs",
      key: "profile",
      icon: <UserOutlined />,
      link: "/dashboard/graph",
    },
    {
      label: "Stats",
      key: "2",
      icon: <DesktopOutlined />,
      link: "/dashboard/statistics",
    },
    {
      label: "Form",
      key: "9",
      icon: <FileOutlined />,
      link: "/dashboard/form",
    },

    {
      label: "Team",
      key: "sub2",
      icon: <TeamOutlined />,
      children: [
        { label: "Team 1", key: "6", link: "/team1" },
        { label: "Team 2", key: "8", link: "/team2" },
      ],
    },
    { label: "Files", key: "9", icon: <FileOutlined />, link: "/files" },
  ];

  const adminItems = [
    {
      label: "Reports",
      key: "dashboard",
      icon: <PieChartOutlined />,
      link: "/dashboard/report",
    },
    {
      label: "Graphs",
      key: "profile",
      icon: <UserOutlined />,
      link: "/dashboard/graph",
    },
    {
      label: "Stats",
      key: "2",
      icon: <DesktopOutlined />,
      link: "/dashboard/statistics",
    },
    {
      label: "Form",
      key: "9",
      icon: <FileOutlined />,
      link: "/dashboard/form",
    },

    {
      label: "Team",
      key: "sub2",
      icon: <TeamOutlined />,
      children: [
        { label: "Team 1", key: "6", link: "/team1" },
        { label: "Team 2", key: "8", link: "/team2" },
      ],
    },
  ];



  const getRandomRole = () => {
    const roles = ["user", "admin"];
    return roles[Math.floor(Math.random() * roles.length)];
  };

  const renderMenuItems = (role) => {
    return role === "admin" ? adminItems : userItems;
  };

  const role = getRandomRole();
  const items = renderMenuItems(role);

  return (
    <Layout>
      <Sider
        collapsible
        className="h-dvh bg-white"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="light" mode="inline">
          <div className="demo-logo bg-white flex items-center justify-center text-black text-3xl">
          <FireFilled className="text-dark_green mt-2" />
          </div>
          <Divider className="text-dark_green" />
          {items.map((item) =>
            item.children ? (
              <Menu.SubMenu key={item.key}  icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    <Link to={child.link}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                className={
                  location.pathname.includes(item.link)
                    ? "ant-menu-item-selected"
                    : ""
                }
              >
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout>
     
        <Content style={{ margin: "0 " }}>
          <div
            style={{
                overflow:'auto',
              height: "100vh", // Set height to 95% of the viewport height
            //   background: "red",
        // Example of adding your own border radius
            }}
          >
  {/* <Header
  className="bg-baige"
  style={{
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items to the right
  }}
>


  <Avatar className="bg-dark_green" icon={<UserOutlined />} />
</Header> */}
      <div className="p-2">
            <Outlet />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default index;
