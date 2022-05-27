import Card from "./Card"

import '../assets/styles/PFire.css';

const PFire = ({elemento}) => {
    return (
        <div className="pokemon-fire">
            <h1>Fire Pokemons</h1>
            <Card elemento={elemento} />
        </div>
    )
}

export default PFire;