var React = require('react');
var AddItem = require('./AddItem');
var ToDoList = require('./ToDoList');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Thompa'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return <div>
            <input placeholder="Your name" onChange={this.handleChange}/>
            <h1>Welcome {this.state.name}</h1>
            <AddItem buttonText="Add To-Do"/>
        </div>
    }
}

module.exports = App;