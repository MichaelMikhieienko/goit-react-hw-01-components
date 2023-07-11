import React from "react";

export const FriendList = (props) =>{
    return (
        <li class="item">
        <span class="status"></span>
        <img class="avatar" src="" alt="User avatar" width="48" />
        <p class="name"></p>
      </li>
    )
}


// export const Statistics = props => {
//   return (
//     <section class="statistics">
//       <h2 class="title">{props.title}</h2>

//       <ul class="stat-list">
//         {props.stats.map(item => {
//           return (
//             <StatItem key={item.id} label={item.label} percentage={item.percentage} />
//            );
//         })}
//       </ul>
//     </section>
//   );
// };

// const StatItem = (props) => {

//   return (
//     <li class="item">
//               <span class="label">{props.label}</span>
//               <span class="percentage">{props.percentage}</span>
//             </li>
//   )
// }