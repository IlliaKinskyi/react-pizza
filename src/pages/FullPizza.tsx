import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://633db4ae7e19b17829148831.mockapi.io/items/' + id)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при загрузке пиццы')
                navigate('/')
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return <>'Загрузка...'</>
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} грн.</h4>
        </div>
    );
};

export default FullPizza;