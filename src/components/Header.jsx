import logo from '../assets/img/dc-logo.png';
import ListItem from '../assets/partials/ListItem';

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
                        <ListItem key={`pa-${elementi.id}`}
                            url={elementi.url}
                            text={elementi.text} />
                    ))}

                </ul>
            </nav>
        </header>
    );
};

export default Header;

