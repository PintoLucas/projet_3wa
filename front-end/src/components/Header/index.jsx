import logo from "../../assets/logo.png"
import "../../styles/Header.css";
import AccountMenu from "./AccountMenu";

function Header() {
    return (
      <header className="gmr__header">
        <div>
          <a href="/feed">
            <img src={logo} alt="Logo Gam'r" className="gmr__logo"/>
          </a>
        </div>
        <div className="gmr__header_menu">
            {/* <div>
                <i className="fa fa-home"></i>
            </div>
            <div>
                <i className="fa fa-comment"></i>
            </div>
            <div>
                <i className="fa fa-bell"></i>
            </div> */}
        </div>
        <div>
          <AccountMenu />
        </div>
      </header>
    );
  }
  
  export default Header;
  