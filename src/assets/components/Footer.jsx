import digitalComics from '../img/buy-comics-digital-comics.png';
import dcMerch from '../img/buy-comics-merchandise.png';
import subscription from '../img/buy-comics-subscriptions.png';
import location from '../img/buy-comics-shop-locator.png';
import powervisa from '../img/buy-dc-power-visa.svg';
const classeStrisciBlu = "blueband"

const Footer = () => {
    return (
        <footer>
            <div className="{classeStrisciBlu} bg-info d-flex justify-content-center align-items-center py-5">
                <div className="mx-3 text-center">
                    <img src={digitalComics} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a href="">DIGITAL COMICS</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={dcMerch} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a href="">DC MERCHANDISE</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={subscription} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a href="">SUBSCRIPTION</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={location} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a href="">COMIC SHOP LOCATOR</a>
                </div>
                <div className="mx-3 text-center">
                    <img src={powervisa} alt="DC" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <a href="">DC POWER VISA</a>
                </div>
            </div>
            <div className="sezioneLink">x</div>
            <div className="sezioneSignUp">x</div>
        </footer>
    )
}

export default Footer
