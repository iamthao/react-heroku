import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './styles/app.scss'

ReactDOM.render(<App/>, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./components/app', () => { render(App) })
}
