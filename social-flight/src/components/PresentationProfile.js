import React from 'react';
import './styles/PresentationProfile.css';

class PresentationProfile extends React.Component{
    render() {
        return (
            <div className="card Profile">
                <div className="Profile__header">
                    <img className="Profile__header-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fspace-5%2F512%2Faviation-512.png&f=1&nofb=1" alt="Logo"/>
                </div>
                <div className="Profile__section-name">
                        <img className="Profile__avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6bpAIMfPsg0%2Fmaxresdefault.jpg&f=1&nofb=1" alt="Card cap"/>
                        <h1>Diego <br/> Buceta </h1>
                </div>
                <div className="Profile__info">
                    <h4 className="card-text ">Piloto Privado</h4>
                    <div>@cap-diego</div>
                </div>
                <div className="Profile__footer">
                    #SocialFlight
                </div>
            </div>
        )
    }
}

export default PresentationProfile;