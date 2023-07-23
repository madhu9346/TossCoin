import './index.css'
import {Component} from 'react'

const imageList = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, changeImg: imageList[0]}

  tossChange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(pre => ({
        changeImg: imageList[tossResult],
        total: pre.total + 1,
        heads: pre.heads + 1,
      }))
    } else {
      this.setState(pre => ({
        changeImg: imageList[tossResult],
        total: pre.total + 1,
        tails: pre.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, changeImg} = this.state

    return (
      <div className="con">
        <div className="con1">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para"> Heads (or) Tails</p>
          <img src={changeImg.imageUrl} className="image" alt="toss result" />
          <br />
          <button className="btn" type="button" onClick={this.tossChange}>
            Toss Coin
          </button>
          <div className="con2">
            <p className="para1">Total: {total}</p>
            <p className="para1">Heads: {heads}</p>
            <p className="para1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
