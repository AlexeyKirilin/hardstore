import { useDispatch, useSelector } from 'react-redux';
import plus from '../../assets/img/plus.svg';
import { addItem } from '../../redux/slices/CartSlice';

const ProductBlock = ({ title, id, price, descr, imageUrl }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id == id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      descr,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <img className="product-block__image" src={imageUrl} alt="product" />
        <h4 className="product-block__title">{title}</h4>
        <div className="product-block__description">{descr}</div>
        <div className="product-block__bottom">
          <div className="product-block__price">{price} Р</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <img style={{ marginRight: '10px' }} src={plus} alt="plus" />
            <span>Купить</span>
            <i>{addedCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
