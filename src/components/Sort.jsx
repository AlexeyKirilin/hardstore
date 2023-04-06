import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/FilterSlise';
import arrowTop from '../assets/img/arrowTop.svg';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = useState(false);
  const list = [
    { name: 'Цене (дороже)', sortProperty: 'price' },
    { name: 'Цене (дешевле)', sortProperty: '-price' },
    { name: 'Алфавиту', sortProperty: '-title' },
  ];

  const onSelectedListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowTop} alt="arrow-top" style={{ marginRight: '10px' }} />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onSelectedListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
