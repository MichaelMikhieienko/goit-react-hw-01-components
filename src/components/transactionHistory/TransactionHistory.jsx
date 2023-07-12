import React from 'react';

export const TransactionHistory = (props) => {
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
    <tr>
    {props.transactions.map(item => {
        return (
          <TransactionHistory
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        );
      })}
    </tr>
    {/* <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */}
  </tbody>
</table>
  );
};

// {props.friends.map(item => {
//     return (
//       <FriendListItem
//         key={item.id}
//         name={item.name}
//         isOnline={item.isOnline}
//         avatar={item.avatar}
//       />
//     );
//   })}