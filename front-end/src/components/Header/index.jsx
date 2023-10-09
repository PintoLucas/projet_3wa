import logo from "../../assets/logo.png"
import avatar from "../../assets/joe.png"
import "../../styles/Header.css";

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
          <div className="gmr__header_account">
            <div>
              <img src={avatar} alt="Avatar de Joe Dalton" className="gmr__avatar"/>
            </div>
            <div>
              <p>Lucas Pinto</p>
            </div>
            <div>
              <i class="fa fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  