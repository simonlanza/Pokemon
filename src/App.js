import {useState} from 'react';
import {pokemonData} from './assets/data';

import Nav from './components/Nav';
import PFire from './components/PFire';
import PWater from './components/PWater';
import PElectric from './components/PElectric';
import PRock from './components/PRock';

import './assets/styles/App.css';



function App() {
    const [state, setState] = useState(<PWater elemento = {pokemonData.water} />);

    const handlerPokemon = (e) => {
        if(e === 1){
            setState(<PFire elemento = {pokemonData[e]}/>);
        } else if (e === 2){
            setState(<PWater elemento = {pokemonData[e]}/>);
        } else if (e === 3){
            setState(<PRock elemento = {pokemonData[e]}/>);
        } else if (e === 4){
            setState(<PElectric elemento = {pokemonData[e]}/>);
        }
    }

    return (
        <div className="App">
            <Nav elementChanger = {handlerPokemon}/>
            {state}
        </div>
    );
}

export default App;
