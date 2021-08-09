import './index.css'

const DenominationItem = props => {
  const {money, onBtnFun} = props
  const btnF = () => {
    onBtnFun(money.value)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={btnF}>
        {money.value}
      </button>
    </li>
  )
}

export default DenominationItem
