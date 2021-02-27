import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Breadcrumb } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import Navbar from './Components/Navbar/Navbar';
import HeaderMain from './Components/Header/HeaderMain';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderMain/>
        <Layout>
          <Navbar/>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 720,
              }}
            >
              Здесь будут товары
        </Content>
            <Footer style={{ textAlign: 'center' }}>Charity Market ©2021</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
