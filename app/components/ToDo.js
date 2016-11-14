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
            itemList.push(item);
            this.setState({items: itemList})
        } else {
            alert('Type something!');
        }
    }

    handleAddList() {
        var lists = this.state.lists;
        lists.push(this.state.items);
        this.setState({items: [], lists: lists});
    }

    render() {
        return (
            <div>
                <ToDoAdd handleAddItem={this.handleAddItem.bind(this)}/>
                <br/>
                <ToDoList items={this.state.items}/>
                <ToDoListSaved lists={this.state.lists} handleAddList={this.handleAddList.bind(this)}/>
            </div>
        )
    }
}

module.exports = ToDo;