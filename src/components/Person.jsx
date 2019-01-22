import React, {Component} from 'react'

class Person extends Component {

    state = {
        checked: false
    };

    checkIn = (e) => {
        this.setState({
            checked: e.target.checked
            // checked: !this.state.checked
        });

        // if (e.target.checked)
        //     this.setState({
        //         checked: true
        //     });
    };

    render = () => {
        const {person} = this.props;
        const {checked} = this.state;
        const {checkIn} = this;

        return (
            <div key={person._id} className="card">
                <div className={checked ? "card-body checked" : "card-body"}>
                    {
                        checked && <span>checked </span>
                    }
                    <input onChange={checkIn} type="checkbox"/> {person.name.first} {person.name.last}
                </div>
            </div>
        )
    }
}

export default Person
