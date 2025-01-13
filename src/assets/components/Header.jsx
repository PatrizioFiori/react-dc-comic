import logo from '../img/dc-logo.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div className="d-flex justify-content-between align-items-center w-100">
                <a className="navbar-brand me-5" href="#">
                    <img src={logo} alt="DC Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                CHARACTERS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                COMICS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                MOVIE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                TV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                GAMES
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                COLLECTIBLES
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                VIDEO
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                FANS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                NEWS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                SHOP
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

