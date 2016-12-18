var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        // These binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(itemIndex) {
        // If the list in which the user is trying to mark an item done is still in progress, thus not saved - show an alert.
        // This prop is set to true from ToDoListSaved.js
        if (this.props.isListSaved) {
            this.props.handleMarkAsDone(this.props.listIndex, itemIndex);
        } else {
            alert('Save your list before marking items as done!')
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="fade-in"
                                     transitionAppear={true} transitionAppearTimeout={500}
                                     transitionEnter={false} transitionLeave={false}>

                <ul>{this.props.items.map((item, i) => {
                    // TODO Might not be optimal to handle it this way.
                    // Check comments on http://derpturkey.com/react-pass-value-with-onclick/
                    var handleClick = this.handleClick.bind(this, i);

                    if (!item.markedDone) {
                        return <li key={i} onClick={handleClick}>{item.text}</li>
                    } else {
                        return <li className="completed-item" key={i} onClick={handleClick}>{item.text}</li>
                    }
                })}
                </ul>
            </ReactCSSTransitionGroup>
        )
    }
}

module.exports = ToDoList;