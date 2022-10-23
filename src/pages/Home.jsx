import React, { useState, useEffect, useContext } from 'react'
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice'
import axios from 'axios'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector(state => state.filter)

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  
  useEffect(() => {
  setIsLoading(true)

  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sort.sortProperty.replace('-', '')
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  axios.get(`https://633db4ae7e19b17829148831.mockapi.io/items?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then(res => {
      setItems(res.data)
      setIsLoading(false)
    })

  window.scrollTo(0, 0  )
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj) => (
    <PizzaBlock 
    {...obj}
    key={obj.id}
    />))

    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index}/>)

    return (
      <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? skeletons
                : pizzas
                }
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </div>
    );
};

export default Home;