import {Link} from 'react-router-dom'

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2> Корзина пустая </h2>
            <p style={{'marginBottom': '30px'}}>
            Вероятней всего, вы еще не заказали товар .
            <br />
            Для того, чтобы заказать товар, перейди на главную страницу.
            </p>
            <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default CartEmpty;