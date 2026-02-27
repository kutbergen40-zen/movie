import React from 'react';
import { Layout, Menu, Button, Space, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import './Header.css'; // CSS файлын импорттоо

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  // Меню элементтери
  const menuItems = [
    { key: '1', label: <NavLink to="/">Башкы бет</NavLink> },
    { key: '2', label: <NavLink to="/services">Кызматтар</NavLink> },
    { key: '3', label: <NavLink to="/about">Биз жөнүндө</NavLink> },
    { key: '4', label: <NavLink to="/contact">Байланыш</NavLink> },
  ];

  return (
    <Header className="custom-app-header">
      {/* Логотип бөлүгү */}
      <div className="logo-container">
        <div className="logo-box" />
        <Text strong className="logo-text">NETFLIX</Text>
      </div>

      {/* Меню (Ортодо) */}
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={menuItems}
        className="custom-menu"
      />

      {/* Оң жактагы баскычтар жана Профиль */}
      <Space size="middle" className="right-action-space">
        <Button type="text" className="login-button">Кирүү</Button>
        <Button type="primary" className="register-button">Катталуу</Button>
        <Avatar icon={<UserOutlined />} className="user-avatar" />
      </Space>
    </Header>
  );
};

export default AppHeader;