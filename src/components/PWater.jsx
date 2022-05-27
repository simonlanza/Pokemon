import Card from "./Card"

import '../assets/styles/PWater.css';

const PWater = ({elemento}) => {
    return (
        <div className="pokemon-water">
            <h1>Water Pokemons</h1>
            <Card elemento={elemento}/>
        </div>
    )
}

export default PWater;