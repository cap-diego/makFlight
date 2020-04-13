import React from 'react';
import Navbar from "../components/Navbar";
import './styles/PresentationProfiles.css';
import PresentationProfileList from "../components/PresentationProfileList";

class PresentationProfiles extends React.Component {
    state = {
        data: [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Freda',
                lastName: 'Grady',
                email: 'Leann_Berge@gmail.com',
                jobTitle: 'Legacy Brand Director',
                instagram: 'FredaGrady22221-7573',
                avatarUrl:
                    'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Major',
                lastName: 'Rodriguez',
                email: 'Ilene66@hotmail.com',
                jobTitle: 'Human Research Architect',
                instagram: 'MajorRodriguez61545',
                avatarUrl:
                    'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Daphney',
                lastName: 'Torphy',
                email: 'Ron61@hotmail.com',
                jobTitle: 'National Markets Officer',
                instagram: 'DaphneyTorphy96105',
                avatarUrl:
                    'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
        ],
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="PresentationProfiles">
                    <div className="PresentationProfiles__fondo">
                        <div className="PresentationProfiles__container">
                            <img style={{'height': '200px', 'width': '200px'}}  className="PresentationProfiles__logo-logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fals%2F4%2F43%2FAirbus_Logo.png&f=1&nofb=1" alt="Logo"/>
                        </div>
                    </div>
                </div>
                <div className="PresentationProfiles__container">
                    <div className="PresentationProfiles__buttons">
                        <a href="/profiles/new" className="btn btn-primary">
                            Nuevo perfil
                        </a>
                    </div>
                    <div className="PresentationProfiles__list">
                        <div className="PresentationProfiles__container">
                            <PresentationProfileList profiles={this.state.data}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PresentationProfiles;