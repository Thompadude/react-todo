var React = require('react');

class ToDoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
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
                <input type='text' value={this.state.inputValue} onChange={this.handleOnChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Add To-Do</button>
            </div>
        )
    }
}

module.exports = ToDoAdd;