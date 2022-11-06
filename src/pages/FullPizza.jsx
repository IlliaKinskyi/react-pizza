import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const FullPizza = () => {
    const { id } = useParams()
    const [pizza, setPizza] = useState()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://633db4ae7e19b17829148831.mockapi.io/items/' + id)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при загрузке пиццы')
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return 'Загрузка...'
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