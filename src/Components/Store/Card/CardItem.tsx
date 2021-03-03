import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import userPhoto from '../../assets/images/user.png';

const { Meta } = Card;


const CardItem: React.FC = () => {
    return (
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="hand made"
                            src="https://i.pinimg.com/originals/dd/5c/af/dd5caf14c6646561578a00506d37a5ef.jpg"
                            style={{height: 300, width: 300}}
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src={userPhoto} />}
                        title="Декорация на дверь"
                        description="изделие выполнено вышивкой, с применением искусственных цветов и цифр"
                    />
                </Card>
    )
}

export default CardItem