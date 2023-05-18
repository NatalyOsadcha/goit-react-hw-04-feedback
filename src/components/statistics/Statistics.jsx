import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <ul className={css.list}>
        <li key="id-1">Good: {good}</li>
        <li key="id-2">Neutral: {neutral}</li>
        <li key="id-3">Bad: {bad}</li>
        <li key="id-4">Total: {countTotalFeedback}</li>
        <li key="id-5">
          Positive feedback: {countPositiveFeedbackPercentage}%
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
