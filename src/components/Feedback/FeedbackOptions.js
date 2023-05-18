import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(nameButton => {
        return (
          <ListItem key={nameButton}>
            <Button type="button" onClick={onLeaveFeedback}>
              {nameButton}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
