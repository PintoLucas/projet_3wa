import "../../styles/Main.css";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import Feed from "../../components/Feed";
import CreatePost from "../../components/CreatePost";

function Main() {
    return (
        <div className="gmr__main">
            <aside>
                <LeftAside />
            </aside>
            <div>
                <CreatePost />
                <Feed />
            </div>
            <aside>
                <RightAside />
            </aside>
        </div>
    );
  }
  
  export default Main;