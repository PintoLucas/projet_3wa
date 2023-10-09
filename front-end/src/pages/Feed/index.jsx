import "../../styles/Feed.css";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";

function Feed() {
    return (
        <div className="gmr__feed">
            <aside>
                <LeftAside />
            </aside>
            <div>
                <h2>Main content</h2>
            </div>
            <aside>
                <RightAside />
            </aside>
        </div>
    );
  }
  
  export default Feed;