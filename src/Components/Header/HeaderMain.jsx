import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderMain = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Главная</Menu.Item>
        <Menu.Item key="2">Товары</Menu.Item>
        <Menu.Item key="3">Корзина</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderMain;
