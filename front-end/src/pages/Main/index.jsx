import "../../styles/Main.css";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import Feed from "../../components/Feed";
import CreatePost from "../../components/CreatePost";
import Header from "../../components/Header";

function Main() {
    return (
        <>
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