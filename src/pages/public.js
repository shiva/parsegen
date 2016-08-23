import React from 'react'
import ReactDOM from 'react-dom'
import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/c_cpp'
import 'brace/theme/github'

var init_code = `
// Write some C code. Press generate when you are done.

int abc(int a, int b) {
    return a+b;
}

/*
CHECK_EQUAL(abc(0,0), <exp>);
CHECK_EQUAL(abc(0,1), <exp>);
CHECK_EQUAL(abc(0,-1), <exp>);
CHECK_EQUAL(abc(0,INT_MAX), <exp>);
CHECK_EQUAL(abc(0,INT_MIN), <exp>);

CHECK_EQUAL(abc(1,0), <exp>);
CHECK_EQUAL(abc(1,1), <exp>);
CHECK_EQUAL(abc(1,-1), <exp>);
CHECK_EQUAL(abc(1,INT_MAX), <exp>);
CHECK_EQUAL(abc(1,INT_MIN), <exp>);

CHECK_EQUAL(abc(-1,0), <exp>);
CHECK_EQUAL(abc(-1,1), <exp>);
CHECK_EQUAL(abc(-1,-1), <exp>);
CHECK_EQUAL(abc(-1,INT_MAX), <exp>);
CHECK_EQUAL(abc(-1,INT_MIN), <exp>);

CHECK_EQUAL(abc(INT_MIN,0), <exp>);
CHECK_EQUAL(abc(INT_MIN,1), <exp>);
CHECK_EQUAL(abc(INT_MIN,-1), <exp>);
CHECK_EQUAL(abc(INT_MIN,INT_MAX), <exp>);
CHECK_EQUAL(abc(INT_MIN,INT_MIN), <exp>);

CHECK_EQUAL(abc(INT_MAX,0), <exp>);
CHECK_EQUAL(abc(INT_MAX,1), <exp>);
CHECK_EQUAL(abc(INT_MAX,-1), <exp>);
CHECK_EQUAL(abc(INT_MAX,INT_MAX), <exp>);
CHECK_EQUAL(abc(INT_MAX,INT_MIN), <exp>);
*/
`

var TestCaseBox = React.createClass({
    componentDidUpdate: function(params) {
        ReactDOM.findDOMNode(this).scrollIntoView(true)
    },
    render: function() {
        return (
        <div id={ this.props.id } className='message'>
        { this.props.value }
        </div>
        )
    }
})

export default React.createClass({
    displayName: 'PublicPage',
    getInitialState: function() {
       return {
           code: init_code
       }
    },
    updateCode: function(newCode) {
       this.setState({
           code: newCode
       })
    },
    handleGenerate: function(e) {
        console.log("generating tests for " + this.state.code)
        this.setState({
            tests: this.state.code
        })
        e.preventDefault()
    },
    render() {
        var options = {
            lineNumbers: true
        }
        return (
            <div className='container'>
              <header role='banner'>
                <h1>ParserGen</h1>
              </header>
              <div>
                <p>Parsing C and generating unit-tests for you, because, we can&trade;</p>
              </div>

              <AceEditor
                  mode="c_cpp"
                  theme="github"
                  onChange={this.updateCode}
                  name="editor"
                  editorProps={{$blockScrolling: true}}
                  value={this.state.code}
                  width="auto"
                  height="300px"
                />

                <a href='#' onClick={this.handleGenerate} className='button button-large'>Generate</a>

                <TestCaseBox id="tests" value={this.state.tests} />
            </div>
        )
    }
})
