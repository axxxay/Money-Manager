import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteTransaction} = props
  const {id, title, amount, type} = eachTransaction
  const onClickDelete = () => {
    onDeleteTransaction(eachTransaction, id)
  }
  return (
    <li className="list-heading-con1">
      <p className="title1">{title}</p>
      <p className="title1">Rs {amount}</p>
      <p className="title1">{type}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
