import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderMain: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><NavLink to="/main">Главная</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/store">Товары</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/cart">Корзина</NavLink></Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderMain;
