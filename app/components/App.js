var React = require('react');

var ToDo = require('./ToDo');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    render() {
        var welcomeText = (<h3 className="headline"> {this.state.name == '' ? 'Type your name above :-)' : 'Welcome ' + this.state.name + '!'} </h3>)
        return (
            <div>
                <input className="input" placeholder="Your name" onChange={this.handleChange}/>
                {welcomeText}
                <ToDo />
            </div>
        )
    }
}

module.exports = App;