import logo from '../assets/img/dc-logo.png';

const Header = () => {
    return (

        <header className='d-flex align-items-center justify-content-between px-5 my-1'>
            <div>
                <img className='' src={logo} alt="DC Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
            </div>
            <div className='navLink d-flex align-items-center'>
                <a href="a">CHARACTERS</a>
                <a href="a">COMICS</a>
                <a href="a">MOVIE</a>
                <a href="a">TV</a>
                <a href="a">GAMES</a>
                <a href="a">COLLECTIBLES</a>
                <a href="a">VIDEO</a>
                <a href="a">FANS</a>
                <a href="a">NEWS</a>
                <a href="a">SHOP</a>
            </div>
        </header>

    );
};

export default Header;

