import 'antd/dist/antd.css';
import { Breadcrumb, Layout } from 'antd';
import CardItem from './Card/CardItem';

const { Content } = Layout;


const Store: React.FC = () => {
    return (
        <div>
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
                <CardItem/>
        </Content>
        </div>
    )
}

export default Store