import React from 'react';
import './styles/PresentationProfile.css';
import { FaTwitter, FaInstagram }  from 'react-icons/fa';

class PresentationProfile extends React.Component{
    render() {

        return (
            <div className="card Profile">
                <div className="Profile__header">
                    <img className="Profile__header-image" src={this.props.avatarUrl} alt="Logo"/>
                </div>
                <div className="Profile__section-name">
                        <img className="Profile__avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6bpAIMfPsg0%2Fmaxresdefault.jpg&f=1&nofb=1" alt="Card cap"/>
                        <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>
                <div className="Profile__info">
                    <h4 className="card-text ">{this.props.jobTitle}</h4>
                    <div>
                        <FaTwitter /> @{this.props.twitter}
                    </div>
                    <div>
                        <FaInstagram /> {this.props.instagram}
                    </div>
                </div>
                <div className="Profile__footer">
                    #SocialFlight
                </div>
            </div>
        )
    }
}

export default PresentationProfile;