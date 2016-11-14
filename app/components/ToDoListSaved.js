var React = require('react');

var ToDoList = require('./ToDoList');

class ToDoListSaved extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.lists.map(
                        (list) => {
                            return <ToDoList items={list}/>
                        }
                    )
                }
            </ul>
        )
    }
}

module.exports = ToDoListSaved;