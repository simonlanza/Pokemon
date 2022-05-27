import Card from "./Card"

import '../assets/styles/PRock.css';

const PRock = ({elemento}) => {
    return (
        <div className="pokemon-rock">
            <h1>Rock Pokemons</h1>
            <Card elemento={elemento}/>
        </div>
    )
}

export default PRock;