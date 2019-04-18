import { createElement } from 'react'
import { render } from 'react-dom'
import { App } from './App'

console.log('TCL: #app', document.getElementById("app"))
render(createElement(App), document.getElementById('app'))
