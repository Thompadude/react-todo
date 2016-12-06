var React = require('react');

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(item) {
        item.markedDone = !item.markedDone;

        // TODO is this correct?
        this.forceUpdate();
        console.log(item)
    }

    render() {
        return (
            // TODO move this style to CSS.
            <ul>{this.props.items.map((item, i) => {
                if (!item.markedDone) {
                    return <li key={i} onClick={this.handleClick.bind(this, item)}>{item.text}</li>
                } else {
                    return <li style={{textDecoration: 'line-through'}} key={i} onClick={this.handleClick.bind(this, item)}>{item.text}</li>
                }
            })}
            </ul>
        )
    }
}

module.exports = ToDoList;