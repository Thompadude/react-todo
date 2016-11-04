var React = require('react');

class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
          {this.props.items.map(function(item, i){
            return <li key={i}>{item}</li>
          })}
      </ul>
    )
  }
};

module.exports = ToDoList;
