import React from 'react';
import PropTypes from 'prop-types';
import { Feedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {total}</Feedback>
      <Feedback>Positive feedback: {positivePercentage}%</Feedback>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
