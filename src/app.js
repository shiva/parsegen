var React = require('react')
var ReactDOM = require('react-dom')
var styles = require('./styles/main.styl')

var Hello = React.createClass({
  displayName: 'Hello',
  render: function () {
    return <div>Hello, {this.props.name}</div>
  }
})

ReactDOM.render(<Hello name='World!'/>, document.body)
