import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/CartSlice';
import plus from '../assets/img/plus.svg';
import minus from '../assets/img/minus.svg';
import close from '../assets/img/close.svg';

const CartItem = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="product-block__image" src={imageUrl} alt="Product" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus">
          <img src={minus} alt="minus" />
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus">
          <img src={plus} alt="plus" />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{(price * count).toFixed(3)} ₽</b>
      </div>
      <div className="cart__item-remove">
        <button onClick={onClickRemove} className="button button--outline button--circle">
          <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
