var React = require('react');
var ToDoList = require('./ToDoList');

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputItem: ''
        };
        this.addItem = this.addItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addItem() {
        if (!(this.state.inputItem === '')) {
            var toDoItems = this.state.items;
            toDoItems.push(this.state.inputItem);

            this.setState({
                items: toDoItems,
                inputItem: ''
            });
        } else {
            alert('Fill in something to do')
        }
    }

    onChange(event) {
        this.setState({inputItem: event.target.value})
    }

    render() {
        return <div className="addItemWrapper">
            <input type='text' value={this.state.inputItem} onChange={this.onChange}/>
            <br />
            <button onClick={this.addItem}>{this.props.buttonText}</button>
            <ToDoList items={this.state.items}/>
        </div>
    }
}

module.exports = AddItem;