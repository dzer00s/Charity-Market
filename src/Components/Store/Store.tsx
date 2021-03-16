import 'antd/dist/antd.css';
import { Breadcrumb, Col, Layout, Row } from 'antd';
import CardItem from './Card/CardItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { useEffect } from 'react';

const { Content } = Layout;


const Store: React.FC = () => {
    const { items, error, loading } = useTypedSelector(state => state.item)
    const { fetchItems } = useActions()

    useEffect(() => {
        fetchItems()
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
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
                <Row>
                        {items.map((i: any) => (
                    <Col span={6}>
                            <CardItem title={i.title} desc={i.desc} price={i.price} photo_url={i.photo_url} />
                    </Col>
                        ))}
                </Row>
            </Content>

        </div>
    )
}

export default Store