import { useState } from 'react'
import reactLogo from './assets/react.svg'

import styles from './App.module.css'

function App() {


  return (
    <header className={styles.main_header} >
      <h1 classnName="logo">
        <img src="./logo.svg" width="250" alt="Flexbox" />
      </h1>

      <nav className="main-nav" style={navStyle}>
        <ul className="main-nav-list">
          <li className="list-item" ><a href="#">About</a></li>
          <li className="list-item"><a href="#">Education</a></li>
          <li className="list-item"><a href="#">Career</a></li>
          <li className="list-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App
