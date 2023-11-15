import "../../styles/Main.css";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import Feed from "../../components/Feed";
import CreatePost from "../../components/CreatePost";
import Header from "../../components/Header";
import Helmet from "react-helmet"

function Main() {
    return (
        <>
        <Helmet>
            <title>Gam'r - Feed</title>
            <meta name="description" content="Gam'r, the social network made by and for the gamers ! - Feed page" />
            <meta name="keywords" content="gamr, social network, feed page, what's new" />
            <meta charset="UTF-8" />
        </Helmet>
            <Header />
            <div className="gmr__main">
                <div>
                    <LeftAside />
                </div>
                <div>
                    <CreatePost />
                    <Feed />
                </div>
                {/* <aside>
                    <RightAside />
                </aside> */}
            </div>
        </>
        
    );
  }
  
  export default Main;