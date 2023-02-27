const MainMenu = (props) => {

    const newItem = props.value;

    return (
        <div className='card' key={newItem.id}>
            <div className='card-mg'>
                <img src={newItem.image} alt={newItem.name} />
            </div>
            <div className='card-list'>
                <h3 className='card-title'>{newItem.name}</h3>
                <div className="card-price">
                    <p>Solo: <b>{newItem.priceSolo}</b></p>
                    <p>Family: <b>{newItem.priceParty}</b></p>
                </div>
                <p>{newItem.description}</p>
            </div>
        </div>
    )
}

export default MainMenu;