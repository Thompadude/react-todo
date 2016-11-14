var React = require('react');

class ToDoAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        // These binding is necessary to make `this` work in the callback
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var item = this.state.inputValue;
        this.props.handleAddItem(item);
        this.setState({inputValue: ''});
    }

    handleOnChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <div className="addItemWrapper">
                <input className="input" type='text' value={this.state.inputValue} onChange={this.handleOnChange}/>
                <button className="button" onClick={this.handleClick}>Add To-Do</button>
            </div>
        )
    }
}

module.exports = ToDoAdd;