import React, {Component} from 'react';

class ControlledForm extends Component {

    state = {
        data: {
            user: "",
            password: "",
            lang: "",
            activeToggler: "left"
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted data: ', this.state.data);
    };

    handleFormChange = event => {
        console.log(event.target);

        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            data: {
                ...this.props.data,
                [name]: value
            }
        });
    };

    render = () => {
        let {user} = this.state.data;

        return (
            <div>
                <h2>Controlled form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputUser">User name</label>
                        <input type="text"
                               name="user"
                               onChange={this.handleFormChange}
                               value={user}
                               className="form-control"
                               id="inputUser"
                               placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password"
                               name="password"
                               onChange={this.handleFormChange}
                               className="form-control"
                               id="inputPassword"
                               placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputLang">Favorite programming language</label>
                        <input type="text"
                               name="lang"
                               onChange={this.handleFormChange}
                               className="form-control"
                               id="inputLang"
                               placeholder="Enter favorite programming language"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ControlledForm;
