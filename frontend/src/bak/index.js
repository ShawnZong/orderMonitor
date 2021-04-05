import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import SideBar from './sidebar'

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
