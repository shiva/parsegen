import app from 'ampersand-app'
import styles from './styles/main.styl'
import Router from './router'

app.extend({
    init() {
        this.router = new Router()
        this.router.history.start()
    }
})

app.init()
