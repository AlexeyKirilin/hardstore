import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../redux/slices/CartSlice';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty'
import cartBig from '../assets/img/cartBig.svg';
import arrowLeft from '../assets/img/grey-arrow-left.svg'
import trash from '../assets/img/trash.svg'

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(state => state.cart);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0)


    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearItems())
        }
    }

    if (!totalPrice) {
        return <CartEmpty/>
    }

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                <h2 className="content__title">
                    <img src={cartBig} alt='cart'/>
                    Корзина
                </h2>
                <div onClick={onClickClear} className="cart__clear">
                <img src={trash} alt='trash'/>

                    <span>Очистить корзину</span>
                </div>
                </div>
                <div className="content__items">
                {items.map((item) => (
                    item.count && <CartItem key={item.id} {...item} />
                ))}
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span>
                        {' '}
                        Всего товаров: <b>{totalCount} шт.</b>{' '}
                        </span>
                        <span>
                        {' '}
                        Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                        </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <img src={arrowLeft} alt='arrow-left'/>
                    
                        <span style={{'marginLeft': '10px'}}>Вернуться назад</span>
                        </Link>
                        <Link to="/order" className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;