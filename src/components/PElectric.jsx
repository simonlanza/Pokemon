import Card from "./Card"

import '../assets/styles/PElectric.css';

const PElectric = ({elemento}) => {
    return (
        <div className="pokemon-electric">
            <h1>Electric Pokemons</h1>
            <Card elemento={elemento}/>
        </div>
    )
}

export default PElectric;