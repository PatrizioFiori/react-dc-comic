const cards = (props) => {
    const { id, thumb, title } = props.cardData;
    return (
        <div className="containerCarte" key={id}>
            <div className="rowCarte">
                <div className="colCarte">
                    <div className="imgCarte">
                        <img src={thumb} alt="" />
                    </div>
                    <div className="titolo">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards;