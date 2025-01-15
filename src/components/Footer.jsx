import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import dcMerch from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import location from '../assets/img/buy-comics-shop-locator.png';
import powervisa from '../assets/img/buy-dc-power-visa.svg';
import fbLogo from '../assets/img/footer-facebook.png'
import twLogo from '../assets/img/footer-twitter.png'
import ytLogo from '../assets/img/footer-youtube.png'
import pintLogo from '../assets/img/footer-pinterest.png'
import perisLogo from '../assets/img/footer-periscope.png'
import footerBg from '../assets/img/footer-bg.jpg'
import ListItem from '../assets/partials/ListItem';

const Footer = (props) => {
    const { dcComicsLink, shopLinks, dcLinks, sitesLink } = props
    return (
        <footer>
            <div className=" blueBand d-flex justify-content-center align-items-center py-5">
                <div className="mx-3 text-center">
                    <img src={digitalComics} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a className='blueBandLink text-white' href="">DIGITAL COMICS</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={dcMerch} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a className='blueBandLink text-white' href="">DC MERCHANDISE</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={subscription} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a className='blueBandLink text-white' href="">SUBSCRIPTION</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={location} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a className='blueBandLink text-white' href="">COMIC SHOP LOCATOR</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={powervisa} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a className='blueBandLink text-white' href="">DC POWER VISA</a>
                </div>
            </div >
            <div class="sezioneJumbo container-fluid bg-dark text-white py-5 px-5">
                <div class="row">

                    <div class="col-md-2">
                        <h3>DC COMICS</h3>
                        <ul class="list-unstyled listaFooter">
                            {dcComicsLink.map(elementi => (
                                <ListItem key={`pa-${elementi.id}`}
                                    url={elementi.url}
                                    text={elementi.text} />
                            ))}
                        </ul>

                        <h3>SHOP</h3>
                        <ul class="list-unstyled listaFooter">
                            {shopLinks.map(elementi => (
                                <ListItem key={`pa-${elementi.id}`}
                                    url={elementi.url}
                                    text={elementi.text} />
                            ))}
                        </ul>
                    </div>

                    <div class="col-md-2">
                        <h3>DC</h3>
                        <ul class="list-unstyled listaFooter">
                            {dcLinks.map(elementi => (
                                <ListItem key={`pa-${elementi.id}`}
                                    url={elementi.url}
                                    text={elementi.text} />
                            ))}
                        </ul>
                    </div>

                    <div class="col-md-2">
                        <h3>SITES</h3>
                        <ul class="list-unstyled listaFooter">
                            {sitesLink.map(element => (
                                <li key={element.id}>
                                    <a href={element.url}>{element.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sezioneSignUp d-flex justify-content-between bg-black align-items-center px-3 py-3">
                <div>
                    <button>SIGN-UP NOW</button>
                </div>
                <div className='d-flex justify-content-end px-5 w-50 align-items-center'>
                    <p className='text-info'>FOLLOW US</p>
                    <img src={fbLogo} alt="fb.logo" />
                    <img src={twLogo} alt="twit.logo" />
                    <img src={ytLogo} alt="yt.logo" />
                    <img src={pintLogo} alt="pint.logo" />
                    <img src={perisLogo} alt="peris.logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer