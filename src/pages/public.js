import React from 'react'

export default React.createClass({
    displayName: 'PublicPage',
    render() {
        return (
            <div className='container'>
              <header role='banner'>
                <h1>ParserGen</h1>
              </header>
              <div>
                <p>Parse and generate stuff for you, because, we can&trade;</p>
                <a href='/login' className='button button-large'>
                  <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
                </a>
              </div>
            </div>
        )
    }
})
