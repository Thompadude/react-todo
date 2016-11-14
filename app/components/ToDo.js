var React = require('react');

var ToDoAdd = require('./ToDoAdd');
var ToDoList = require('./ToDoList');
var ToDoListSaved = require('./ToDoListSaved');

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            lists: []
        };
    }

    handleAddItem(item) {
        if (item.length > 0) {
            var itemList = this.state.items;
            this.state.items.push(item);
            this.setState({items: itemList})
        } else {
            alert('Type something!');
        }
    }

    render() {
        return (
            <div>
                <ToDoAdd handleAddItem={this.handleAddItem.bind(this)}/>
                <br/>
                <ToDoList items={this.state.items}/>
            </div>
        )
    }
}

module.exports = ToDo;