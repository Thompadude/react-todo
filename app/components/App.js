var React = require('react');

var ToDo = require('./ToDo');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
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
            <h1 className="headline">Welcome {this.state.name}</h1>
            <ToDo />
        </div>
    }
}

module.exports = App;