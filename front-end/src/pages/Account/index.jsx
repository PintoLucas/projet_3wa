import '../../styles/Account.css';
import Header from "../../components/Header";

function Account() {
    return (
        <>
        <Header />
        <div className="gmr__align_items gmr__column gmr__my_account">
            <h1>Modify my informations</h1>
            <form className="gmr__column gmr__align_items gmr__modify_informations">
                <input type="text" placeholder="Change name" />
                <input type="text" placeholder="Change pseudo" />
                <textarea type="text" placeholder="Change biography" />
                <input type="text" placeholder="Change avatar URL" />
                <input type="text" placeholder="Change banner URL" />
                <input type="email" placeholder="Change email" />
                <input type="password" placeholder="Change password" />
                <button>Change my informations</button>
            </form>
        </div>
        </>
    );
}

export default Account;
