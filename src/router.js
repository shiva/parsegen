import app from 'ampersand-app'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import React from 'react'
import ReactDOM from 'react-dom'

export default Router.extend({
    routes: {
        '' : 'public',
        'repos' : 'repos'
    },

    public() {
        ReactDOM.render(<PublicPage/>, document.body)
    },

    repos () {
        ReactDOM.render(<ReposPage/>, document.body)
    }
})
