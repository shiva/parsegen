import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles/main.styl'

const Hello = React.createClass({
    displayName: 'Hello',
    render() {
        return <div>Hello, {this.props.name}</div>
    }
})

ReactDOM.render(<Hello name='World!'/>, document.body)
