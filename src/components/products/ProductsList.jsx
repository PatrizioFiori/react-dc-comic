import comics from "../../data/comics"


const ProductsList = (props) => {
    const comics = props.comics
    return (
        <div>
            <div className="container">
                <div className="prod-card">
                    <img src="pro" alt="" />
                    <h4></h4>
                </div>
            </div>

        </div>
    )
}

export default ProductsList