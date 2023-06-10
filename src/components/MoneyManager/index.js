import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    expenses: 0,
    balance: 0,
    income: 0,
    transactionList: [],
    title: '',
    amount: '',
    type: 'Income',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    const selectType = transactionTypeOptions.filter(
      eachType => eachType.optionId === event.target.value,
    )
    console.log(selectType)
    this.setState({type: selectType[0].displayText})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title === '' || amount === '') {
      return
    }
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))
  }

  onDeleteTransaction = (transaction, id) => {
    const {transactionList} = this.state
    const {amount, type} = transaction
    this.setState({
      transactionList: transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    })
    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(amount),
        balance: prevState.balance - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    }
  }

  render() {
    const {
      title,
      amount,
      transactionList,
      balance,
      income,
      expenses,
    } = this.state
    return (
      <div className="container">
        <div className="user-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="desc">
            Welcome back to your{' '}
            <span className="desc-span">Money Manager</span>
          </p>
        </div>
        <div className="money-details-list">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="transaction-history-con">
          <form className="transaction-from" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              className="select-type input"
              id="type"
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.optionId}
                  className="option-item"
                  key={eachTransaction.optionId}
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>
          <div className="transactions-con">
            <h1 className="transaction-heading history">History</h1>
            <ul className="transactions-list">
              <li className="list-heading-con">
                <p className="title">Title</p>
                <p className="title">Amount</p>
                <p className="title">Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  eachTransaction={eachTransaction}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
