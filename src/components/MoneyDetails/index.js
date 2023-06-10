import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props
  return (
    <>
      <div className="list-item green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-img"
          alt="balance"
        />
        <div className="money-details">
          <p className="balance">Your Balance</p>
          <p className="in-rupees" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="list-item blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-img"
          alt="income"
        />
        <div className="money-details">
          <p className="balance">Your Income</p>
          <p className="in-rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="list-item violet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-img"
          alt="expenses"
        />
        <div className="money-details">
          <p className="balance">Your Expenses</p>
          <p className="in-rupees" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
