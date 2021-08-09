// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onBtnFun = mm => {
    const {money} = this.state
    this.setState({money: money - mm})
    console.log(mm)
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="sarahbox">
          <div className="round">
            <p className="s">S</p>
          </div>
          <p className="sarahwill">Sarah Williams</p>
        </div>
        <div className="moneybg">
          <p className="urmoney">Your Balance</p>
          <p className="rs">{money}</p>
        </div>
        <div className="inrc">
          <p className="inr">In Rupees</p>
        </div>
        <h2 className="withdraw">Withdraw</h2>
        <h3 className="csum">CHOOSE SUM (IN RUPEES)</h3>
        <ul className="btnc">
          {denominationsList.map(each => (
            <DenominationItem
              money={each}
              key={each.id}
              onBtnFun={this.onBtnFun}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
