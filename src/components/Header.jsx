import "../css/Header.css"
function Header() {
    return (
        <div className="navBar">
            {/* ____Home____*/}
            <a><button className="fancyButton">Home</button></a>
            {/* ____Login____*/}
            <a><button className="fancyButton">Logout</button></a>
            {/* ____Main UI____*/}
            <a><button className="fancyButton">Main</button></a>
        </div>
    )
}

export default Header;