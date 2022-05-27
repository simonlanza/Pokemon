import '../assets/styles/Card.css';

const Card = ({elemento}) => {
    return (
        <div className={elemento[1].type}>
            {
                elemento.map(item => 
                        <div className='card' key={item.id}>
                            <h2 id={item.type}>{item.pokemonName}</h2>
                            <img src={item.avatar} alt={item.pokemonName} />
                        </div>
                    )               
            }
        </div>
    )
}

export default Card;