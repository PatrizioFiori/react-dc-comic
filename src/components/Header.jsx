import logo from '../assets/img/dc-logo.png';

const Header = (props) => {
    const menu = props.menu
    return (


        <header className='d-flex align-items-center justify-content-between px-5 my-2'>
            <figure>
                <img className='' src={logo} alt="DC Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
            </figure>
            <nav>
                <ul className='navMenu'>
                    {menu.map(elementi => (
                        <li key={elementi.id}>
                            <a href={elementi.url}>{elementi.text}</a>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
};

export default Header;

