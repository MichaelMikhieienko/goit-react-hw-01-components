import React from 'react';

export const TransactionHistory = props => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map(item => {
          return (
            <TransactionHistoryRow
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};


const TransactionHistoryRow = props => {
  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.type}</td>
      <td>{props.currency}</td>
    </tr>
  );
};
