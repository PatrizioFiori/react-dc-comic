import comics from "../data/comics"
import ProductCard from "./products/ProductCard"

const Main = () => {
    return (
        <main>
            <div className="jumbotron">
                <img src="src\assets\img\jumbotron.jpg" alt="" />
            </div>
            <div className="containerCarte">

                {comics.map(card => (
                    <ProductCard key={card.id} cardData={card} />
                ))}
            </div>
        </main>
    )
}

export default Main