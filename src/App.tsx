import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import Navbar from './Components/Navbar/Navbar';
import HeaderMain from './Components/Header/HeaderMain';
import Store from './Components/Store/Store';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderMain />
        <Layout>
          <Navbar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Route path='/store'
              render={() => <Store />} />
            <Footer style={{ textAlign: 'center' }}>Charity Market ©2021</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
