const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Телефоны', 'Ноутбуки', 'Телевизоры', 'Планшеты'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
