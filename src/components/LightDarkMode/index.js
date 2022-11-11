// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isWhiteBackground: true,
  }

  onChange = () => {
    this.setState(prevState => ({
      isWhiteBackground: !prevState.isWhiteBackground,
    }))
  }

  render() {
    const {isWhiteBackground} = this.state
    const backgroundClassName = isWhiteBackground
      ? 'background-black'
      : 'background-white'
    const headingClassName = isWhiteBackground
      ? 'heading-white'
      : 'heading-black'
    const btnText = isWhiteBackground ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`small-container ${backgroundClassName}`}>
          <h1 className={headingClassName}>Click To Change Mode</h1>
          <button onClick={this.onChange} className="btn-style" type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
