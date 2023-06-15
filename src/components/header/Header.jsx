import "../../styles/header/header.css";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header__content container">
                <Link to="/">
                    <h1>Keep-My-LinkedIns</h1>
                </Link>
                <Link
                    to="/new"
                    className="header__link"
                >
                    Add a LinkedIn
                </Link>
            </div>
        </header>
    )
}

export default Header