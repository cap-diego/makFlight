import React from "react";

class PresentationProfileForm extends React.Component {
    state = {
    };
    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // };
    handleClick = e => {
    };
    handleSubmit = e => {
      e.preventDefault();
    };
    render() {
        return (
            <div>
                <h1>Nuevo perfil</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Mail</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="mail" value={this.props.formValues.mail}/>
                    </div>
                    <div className="form-group">
                        <label>Instagram</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="instagram" value={this.props.formValues.instagram}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary"> Guardar</button>
                </form>
            </div>
        );
    }
}

export default PresentationProfileForm;