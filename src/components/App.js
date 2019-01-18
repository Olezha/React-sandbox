import React, {PureComponent, Component} from 'react'
import ArticleList from './ArticleList'
import Person from './Person'
import articles from '../articles'
import people from '../people.json'; // from https://next.json-generator.com/
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

console.log("people", people);

class App extends PureComponent {

    state = {
        reverted: false
    };

    render() {
        console.log(2, this.state);

        const adv = <section style={{margin: '20px'}}>some adv</section>;

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Hello World!</h1>
                    <button onClick={this.revert}
                            className="btn btn-primary">Revert Articles
                    </button>
                </div>
                <People/>
                {adv}
                <ArticleList
                    articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        console.log(1);
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

class People extends Component {

    state = {
        users: people
    };

    filter = (e) => {
        let query = e.target.value.toLowerCase();
        console.log(query);

        this.setState({
            users: people.filter(person => {
                let name = (person.name.first + ' ' + person.name.last).toLowerCase();
                return name.indexOf(query) !== -1;
            })
        });
    };

    render = () => {
        const {users} = this.state;
        const {filter} = this;

        return (
            <div>
                <h2>People</h2>

                <div style={{marginBottom: '15px'}}>
                    <input onChange={filter} placeholder="Search"/>
                </div>

                {
                    users.length === 0 &&
                    <div className="card">
                        <div className="card-body">
                            Woohoo ho
                        </div>
                    </div>
                }

                {
                    users.map(person => <Person person={person} key={person._id}/>)
                }
            </div>
        );
    }
}

export default App
