import React, { useState } from 'react'

function Categories() {

  const [activeIndex, setActiveIndex] = useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

    return (
      <div className="categories">
      <ul>
        {/* <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? "active" : ''}>Все</li> */}
        {categories.map((value, i) => (
            <li onClick={() => onClickCategory(i)} className={activeIndex === i ? "active" : ''} key={i}>
              {value}
            </li>
          ))}
      </ul>
    </div>
    )
}

export default Categories;