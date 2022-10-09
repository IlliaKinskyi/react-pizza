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
      window.scrollTo(0, 0)
    }, [])

    return (
      <div className="container">
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
        </div>
    );
};

export default Home;