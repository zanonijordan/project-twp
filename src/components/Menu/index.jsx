// eslint-disable-next-line
import {style} from './style.css'
import { Nav } from './style';


export const Menu = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="/">World Puzzle</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </Nav>
    );
};


