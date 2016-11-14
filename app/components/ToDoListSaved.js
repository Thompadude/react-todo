var React = require('react');

var ToDoList = require('./ToDoList');

class ToDoListSaved extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.props.handleAddList();
    }

    render() {
        return (
            <div>
                <h1>Saved Lists</h1>
                <ul>
                    {this.props.lists.map((list, i) => {
                        return (<li key={i}>
                                <p>List {i + 1}</p>
                                <ToDoList items={list}/>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={this.handleButtonClick}>Add above list to saved lists</button>
            </div>
        )
    }
}

module.exports = ToDoListSaved;