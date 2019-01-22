import React, {PureComponent, Component} from 'react'
import articles from '../articles'
import people from '../people.json'; // from https://next.json-generator.com/
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ArticleList from './ArticleList'
import Person from './Person'
import Stateless from './Stateless'
import Statefull from './Statefull'
import StatefullES7 from './Statefull-es7'
import Binding from './Binding'
import Btn from './Btn'
import TwoElements from "./TwoElements";
import Lifecycle from "./Lifecycle";

// console.log("people", people);

class App extends PureComponent {

    state = {
        reverted: false
    };

    render() {
        // console.log(2, this.state);

        const adv = <section style={{margin: '20px'}}>some adv</section>;

        const Todo = ({foo}) => (
            <div>Todo {foo}</div>
        );

        const Todo2 = (props) => (
            <div>Todo {props.foo}</div>
        );

        const List = ({children}) => {

            return (
                <ul>
                    {children}
                </ul>
            )
        };

        const animals = [
            {id: 1, title: 'Bird', sound: 'Tweet. You\'re a bird', error: false},
            {id: 2, sound: 'Buzz', error: true},
            {id: 3, title: 'Cat', sound: 'Meow', error: true},
            {id: 4, title: 'Cow', sound: 'Moo - moo'}
        ];

        const btnAction = e => {
            console.log('Event', e);
        };

        return (
            <div className="container">
                <Lifecycle/>
                <hr/>
                <TwoElements/>
                <TwoElements second="true"/>
                <hr/>
                <h2>Children elements</h2>
                <List>
                    {/**
                     * Can pass:
                     * - Text
                     * - HTML
                     * - Component(s)
                     * - JS Expressions
                     */}
                    <li><Btn/></li>
                    <li><Btn text='Btn 2' action={() => {
                        console.log('Button other action')
                    }}/></li>
                    <li><Btn text='Btn with event' action={btnAction}/></li>
                </List>
                <hr/>
                <Binding/>
                <hr/>
                <div className="jumbotron">
                    <h1 className="display-3">Hello World!</h1>
                    <button onClick={this.revert}
                            className="btn btn-primary">Revert Articles
                    </button>
                </div>
                <Todo foo="bar"/>
                <Todo2 foo="bar"/>
                <hr/>
                <h2>We are the Stateless</h2>
                <Stateless title="Dog" sound="Woof"/>
                {
                    animals.map(item => {
                        return (
                            <Stateless key={item.id} title={item.title} sound={item.sound} error={item.error}/>
                        )
                    })
                }
                <hr/>
                <Statefull/>
                <hr/>
                <StatefullES7/>
                <hr/>
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
