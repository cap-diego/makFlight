import React from "react";
import Navbar from '../components/Navbar';
import PresentationProfile from "../components/PresentationProfile";
import './styles/PresentationProfileNew.css';
import PresentationProfileForm from '../components/PresentationProfileForm';

class PresentationProfileNew extends React.Component {
    state = {
      form: {
          firstName: '',
          lastName: '',
          jobTitle: '',
          instagram: '',
          mail: ''
      }
    };
    handleChange = e => {
      this.setState({
          form: {
              ...this.state.form,
              [e.target.name]: e.target.value
          }
      })
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="PresentationProfileNew__fondo">
                    <img style={{'height': '200px', 'width': '200px'}} className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fals%2F4%2F43%2FAirbus_Logo.png&f=1&nofb=1" alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <PresentationProfile firstName={this.state.form.firstName} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} instagram={this.state.form.instagram} mail={this.state.form.mail} avatarUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fmix-of-simple-vol-3%2F57%2Faircraft_airplane_aeroplane_plane_runway_landing_touchdown_reduced_height-128.png&f=1&nofb=1" />
                        </div>
                        <div className="col-6">
                            <PresentationProfileForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PresentationProfileNew;
