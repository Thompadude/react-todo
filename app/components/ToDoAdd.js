var React = require('react');

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItem: ''
        };
        this.addItem = this.addItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addItem() {
        if (!(this.state.inputItem === '')) {
            // TODO send item to ToDoList
        } else {
            alert('Fill in something to do')
        }
    }

    onChange(event) {
        this.setState({inputItem: event.target.value})
    }

    render() {
        return (
            <div className="addItemWrapper">
                <input type='text' value={this.state.inputItem} onChange={this.onChange}/>
                <br />
                <button onClick={this.addItem}>Add To-Do</button>
            </div>
        )
    }
}

module.exports = AddItem;