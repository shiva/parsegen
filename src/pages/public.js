import React from 'react'
import ReactDOM from 'react-dom'
import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/c_cpp'
import 'brace/theme/github'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/styles'
import { docco } from 'react-syntax-highlighter/dist/styles'

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
            <SyntaxHighlighter id="tests" language='javascript' style={solarizedLight}>
            {this.props.value}
            </SyntaxHighlighter>
        )
    }
})

export default React.createClass({
    displayName: 'PublicPage',
    getInitialState: function() {
       return {
           code: init_code,
           edProps: {
               $blockScrolling: true,
           },
           edOptions: {
               showLineNumbers: true,
               showPrintMargin: true,
               showGutter: true
           },
           tests: "nothing"
       }
    },
    updateCode: function(newCode) {
       this.setState({
           code: newCode
       })
    },
    handleLineNum: function(e) {
        this.setState({
            edOptions: {
                showLineNumbers: !this.state.edOptions.showLineNumbers,
                showPrintMargin: !this.state.edOptions.showPrintMargin,
                showGutter: !this.state.edOptions.showGutter
            }
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
              <a href='#' onClick={this.handleGenerate} className='button button-large' title="Generate Test Cases">Generate</a>
              <a href='#' onClick={this.handleLineNum} className='button button-large' title="Toggle styling" >..</a>
              <AceEditor
                  mode="c_cpp"
                  theme="github"
                  onChange={this.updateCode}
                  name="editor"
                  editorProps={this.state.edProps}
                  setOptions={this.state.edOptions}
                  value={this.state.code}
                  width="auto"
                  height="500px"
                />
                <TestCaseBox id="tests" value={this.state.tests} height="500px"/>
            </div>
        )
    }
})
