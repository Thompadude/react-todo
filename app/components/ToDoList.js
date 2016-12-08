var React = require('react');

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        // These binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(itemIndex) {
        if (this.props.isListSaved) {
            this.props.handleMarkAsDone(this.props.listIndex, itemIndex);
        } else {
            alert('Save your list before marking items as done!')
        }
    }

    render() {
        return (
            <ul>{this.props.items.map((item, i) => {

                // TODO Might not be optimal to handle it this way.
                // Check comments on http://derpturkey.com/react-pass-value-with-onclick/
                var handleClick = this.handleClick.bind(this, i);

                if (!item.markedDone) {
                    return <li key={i} onClick={handleClick}>{item.text}</li>
                } else {
                    return <li className="strikethrough" key={i} onClick={handleClick}>{item.text}</li>
                }
            })}
            </ul>
        )
    }
}

module.exports = ToDoList;