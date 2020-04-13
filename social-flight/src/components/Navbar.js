import React from 'react';
import '../components/styles/Navbar.css';
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">

                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" style={{'height': '60px', 'width': '200px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fthumb%2Ff%2Ff3%2FBoeing_logo.svg%2F1200px-Boeing_logo.svg.png&f=1&nofb=1" alt="Logo"/>
                    <span className="font-weight-light">Flight</span>
                    <span className="font-weight-bold" >Flight</span>
                </a>
                </div>

            </div>
        );
    }
}

export default Navbar;
