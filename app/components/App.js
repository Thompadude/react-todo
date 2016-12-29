var React = require('react');

var ToDo = require('./ToDo');

// Import the ES2015 'way'
import {Provider} from 'react-redux'
import store from '../store'
import TestStore from '../components/TestStore'

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

                <Provider store={store}>
                    <TestStore/>
                </Provider>

                <input className="input" placeholder="Your name" onChange={this.handleChange}/>
                {welcomeText}
                <ToDo />
            </div>
        )
    }
}

module.exports = App;