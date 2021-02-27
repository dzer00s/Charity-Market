import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Navbar = () => {
  return (
    <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
    >
        <Menu.Item key="1">Все товары</Menu.Item>
        <Menu.Item key="2">Товары из дерева</Menu.Item>
        <Menu.Item key="3">Аксессуары</Menu.Item>
    </Menu>
  </Sider>
  );
};

export default Navbar;
