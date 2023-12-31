import PropTypes from "prop-types";
import css from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return <table className={css.transactionHistory}>
  <thead className={css.head}>
    <tr className={css.headRow}>
      <th className={css.headName}>Type</th>
      <th className={css.headName}>Amount</th>
      <th className={css.headName}>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map((item) => (
        <tr key = {item.id} className={css.row}>
      <td className={css.data}>{item.type}</td>
      <td className={css.data}>{item.amount}</td>
      <td className={css.data}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>

};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, type: PropTypes.string.isRequired, amount: PropTypes.string.isRequired, currency: PropTypes.string.isRequired}).isRequired).isRequired};
export default TransactionHistory;