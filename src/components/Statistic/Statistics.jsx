import React from 'react';
import PropTypes from "prop-types";

export const Statistics = (props) => {
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const StatItem = (props) => {
  return (
    <li className="item">
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}</span>
    </li>
  );
};
