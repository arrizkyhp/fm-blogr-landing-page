import logo from "assets/images/logo.svg";
import Attribution from "layouts/Attribution";

const Footer = ({ data }) => {

  return <footer>
    <div className="footer-content">
      <img src={logo} alt="blogr logo" className="logo" />
      {data.map( menu => {
        return <div className="footer-content__menu" key={menu._id}>
          <h1>{menu.title}</h1>
          <ul>
            {menu.lists.map( (list, index) => {
               return <li key={`${menu.title}-${index}`}> <a href={list.url}>{list.name}</a> </li>
            })}
          </ul>
        </div>
        })}



    </div>
    <Attribution />
  </footer>;
};

export default Footer;
