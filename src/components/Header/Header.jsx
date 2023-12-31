import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default Header;