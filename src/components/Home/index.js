// Write your JS code here

import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="app-home-container">
        <Header />

        <div className="home-content-container">
          <div className="text-content-container">
            <h1 className="heading-home">Clothes That Get You Noticed</h1>
            <p className="home-paragraph">
              Fashion is part of the daily air go in the src/components
              directory. Do not change the component folder names as those are
              the files being imported into the tests. Do not remove the
              pre-filled code Want to quickly review some of the concepts you’ve
              been learning? Take a look at the Cheat Sheets.
            </p>
            <div>
              <button type="button" id="btn">
                Shop Now
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt=" clothes that get you noticed"
            className="home-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
