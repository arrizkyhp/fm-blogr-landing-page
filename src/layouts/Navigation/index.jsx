import logo from 'assets/images/logo.svg'
import Button from 'components/Button/Button'

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav__left">
                <img src={logo} alt="blogr logo" className="nav__left__logo" />
                <ul className="nav__left__menu text-white">
                    <li>
                        <p>Product</p>
                    </li>
                    <li>
                        <p>Company</p>
                    </li>
                    <li>
                        <p>Connect</p>
                    </li>
                </ul>
            </div>

            <div className="nav__right">
                <a href="/" className='text-white'>Login</a>
                <Button isWhite>Sign Up</Button>
            </div>
        </nav>
    )
}
