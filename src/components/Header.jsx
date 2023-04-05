import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/img/hardware-logo.svg'
import cart from '../assets/img/cart.svg'


const Header = () => {

    const {items, totalPrice} = useSelector((state) => state.cart);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img src={logo} alt=" logo" />
                        <div>
                        <h1>Hardware store</h1>
                        </div>
                    </div>
                </Link>
                <Search/>
                <div className="header__cart">
                    <Link to='/cart' className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <img src={cart} alt="cart" style={{'marginRight': '10px'}}/>
           
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;