// eslint-disable-next-line
import {style} from './style.css'

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Puzzle</a>
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
                    <li class="nav-item">
                        <a className="nav-link" href="/pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/downloads">Download</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


