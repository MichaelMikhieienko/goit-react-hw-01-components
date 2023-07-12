import React from 'react';

export const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        {props.stats.map(item => {
          return (
            <StatItem key={item.id} label={item.label} percentage={item.percentage} />
           );
        })}
      </ul>
    </section>
  );
};

const StatItem = (props) => {

  return (
    <li className="item">
              <span className="label">{props.label}</span>
              <span className="percentage">{props.percentage}</span>
            </li>
  )
}
