import '../assets/styles/Nav.css'

const Nav = ({elementChanger}) => {
    return(
        <nav>
            <img src='https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png/550px-TituloUniversoPok%C3%A9mon.png' alt="" />
            <div>            
                <button className="fire-btn" onClick={() => elementChanger(1)} >Fire</button>
                <button className="water-btn" onClick={() => elementChanger(2)}>Water</button>
                <button className="rock-btn" onClick={() => elementChanger(3)}>Rock</button>
                <button className="electric-btn" onClick={() => elementChanger(4)}>Electric</button>
            </div>
        </nav>
    )
}

export default Nav;