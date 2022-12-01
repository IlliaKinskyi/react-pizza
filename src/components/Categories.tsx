import React, { memo } from 'react'
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
}

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  useWhyDidYouUpdate('Categories', { value, onChangeCategory })

    return (
      <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
            <li 
              onClick={() => onChangeCategory(i)} 
              className={value === i ? "active" : ''} 
              key={i}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
    )
})

export default Categories;