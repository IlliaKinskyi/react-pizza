import React, { useState, useEffect } from 'react'
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      fetch('https://633db4ae7e19b17829148831.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                : items.map((obj) => (
                        <PizzaBlock 
                        {...obj}
                        key={obj.id}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Home;