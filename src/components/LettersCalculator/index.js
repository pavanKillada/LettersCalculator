// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {searchInput: '', inputLength: 0}

  onSearchChange = event => {
    this.setState(() => {
      const searchInput = event.target.value
      const inputWithNoSpaces = searchInput.replaceAll(' ', '')
      return {searchInput, inputLength: inputWithNoSpaces.length}
    })
  }

  render() {
    const {searchInput, inputLength} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="text-container">
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="inputEl">Enter the phrase</label>
          <br />
          <input
            id="inputEl"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onSearchChange}
            value={searchInput}
          />
          <br />
          <p>No.of letters: {inputLength}</p>
        </div>
      </div>
    )
  }
}
export default LetterCalculator
