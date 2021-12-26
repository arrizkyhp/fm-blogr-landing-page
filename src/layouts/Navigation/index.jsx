import logo from 'assets/images/logo.svg'
import Button from 'components/Button/Button'

export default function Navigation({ data }) {
    console.log(data)
    return (
      <nav className="nav">
        <div className="nav__left">
          <img src={logo} alt="blogr logo" className="nav__left__logo" />
          <ul className="nav__left__menu text-white">
              {data.map( menu => {
                return (
                  <li className="dropdown" key={`list-${menu._id}`}>
                    <button className="dropdown__button" title={menu.title}>
                      {menu.title}
                    </button>
                    <div className="dropdown__content">
                      {menu.lists.map( (list, index) => {
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
