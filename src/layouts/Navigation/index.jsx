import logo from 'assets/images/logo.svg'
import Button from 'components/Button/Button'
import { useState } from 'react'

export default function Navigation({ data }) {
    const [checked, isChecked] = useState(false)
    const [showed, isShowed] = useState("")

    const showMenu = () => {
      isChecked(!checked);
    }

    const showSubMenu = (e) => {
       isShowed(e);
    }

    return (
      <nav className="nav">
        <div className="nav__left">
          <img src={logo} alt="blogr logo" className="nav__left__logo" />

          <div id="menuToggle">
            <input type="checkbox" onClick={showMenu} />
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav__left__menu text-white ${checked ? 'show' : ""}`}>
            {data.map((menu, index) => {
              return (
                <li className={`dropdown ${showed === index ? "active" : " " }`} key={`list-${menu._id}`}>
                  <button className="dropdown__button" title={menu.title} onClick={e => {showSubMenu(index)}}>
                    {menu.title}
                  </button>
                  <div className="dropdown__content">
                    {menu.lists.map((list, index) => {
                      return (
                        <a className="text-very-dark-blue" href={list.url} key={`link-${menu.title}-${index}`}>
                          {list.name}
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__right">
          <a href="/" className="text-white">
            Login
          </a>
          <Button isWhite>Sign Up</Button>
        </div>
      </nav>
    );
}
