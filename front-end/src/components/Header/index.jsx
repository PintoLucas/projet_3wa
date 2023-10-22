import logo from "../../assets/logo.png"
import avatar from "../../assets/joe.png"
import "../../styles/Header.css";
import AccountMenu from "./AccountMenu";

function Header() {
    return (
      <header className="gmr__header">
        <div>
          <img src={logo} alt="Logo Gam'r" className="gmr__logo"/>
        </div>
        <div className="gmr__header_menu">
            <div>
                <i className="fa fa-home"></i>
            </div>
            <div>
                <i className="fa fa-comment"></i>
            </div>
            <div>
                <i className="fa fa-bell"></i>
            </div>
        </div>
        <div>
          <AccountMenu />
        </div>
      </header>
    );
  }
  
  export default Header;
  