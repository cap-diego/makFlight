import React from 'react';

class PresentationProfileList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.profiles.map( (profile) => {
                    return  (
                        <li key={profile.id}>
                            <PresentationProfileListItem profile={profile}/>
                        </li>
                    )
                })}
            </ul>
        );
    }
}
class PresentationProfileListItem extends React.Component {
    render() {
        return(
            <p>{this.props.profile.firstName}</p>
        )
    }
}
export default PresentationProfileList;