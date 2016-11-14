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
        var button = (<button onClick={this.handleButtonClick}>
            { this.props.lists.length < 1 ? 'Save your first list!' : 'Add more lists' }
        </button>);

        if (this.props.lists.length < 1) {
            return (
                <div>
                    <p>You have no saved lists yet!</p>
                    {button}
                </div>
            )
        } else {
            return (
                <div>
                    <h1 className="headline">Saved Lists</h1>
                    <ul>
                        {this.props.lists.map((list, i) => {
                            return (<li key={i}>
                                    <p>List {i + 1}</p>
                                    <ToDoList items={list}/>
                                </li>
                            )
                        })}
                    </ul>
                    {button}
                </div>
            )
        }
    }
}

module.exports = ToDoListSaved;