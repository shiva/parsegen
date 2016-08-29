import app from 'ampersand-app'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import React from 'react'
import ReactDOM from 'react-dom'

export default Router.extend({
    routes: {
        '' : 'public',
    },

    public() {
        ReactDOM.render(<PublicPage/>, document.getElementById('root'))
    },

})
