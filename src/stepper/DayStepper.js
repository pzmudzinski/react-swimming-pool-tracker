import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '@material/button/dist/mdc.button.css';
import { Button } from '@rmwc/button';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class DotsMobileStepper extends React.Component {

  render() {
    return (
      <Wrapper>
        {this.renderPreviousDate()}
        {this.renderCurrentDate()}
        {this.renderNextDate()}
      </Wrapper>
    )
  }

  renderCurrentDate() {
    const {currentDate, dateFormat} = this.props;
    return (
      <h4>
        {currentDate.format(dateFormat)}
      </h4>
    )
  }

  renderPreviousDate() {
    const { previousDate, isPreviousDateDisabled, shortDateFormat, selectDate} = this.props;
    return (
      <Button
        raised
        label={previousDate.format(shortDateFormat)}
        icon="keyboard_arrow_left"
        disabled={isPreviousDateDisabled}
        onClick={() => selectDate(previousDate)}
      />
    )

  }

  renderNextDate() {
    const { nextDate, isNextDateDisabled, shortDateFormat, selectDate} = this.props;
    return (
      <Button
        raised
        label={nextDate.format(shortDateFormat)}
        onClick={() => selectDate(nextDate)}
        disabled={isNextDateDisabled}
        trailingIcon="keyboard_arrow_right"
      />
    )
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

  dateFormat: PropTypes.string,
  shortDateFormat: PropTypes.string,
  previousDate: PropTypes.object,
  currentDate: PropTypes.object.isRequired,
  nextDate: PropTypes.object,
  isPreviousDateDisabled: PropTypes.bool.isRequired,
  isNextDateDisabled: PropTypes.bool.isRequired,
  selectDate: PropTypes.func.isRequired,
};

DotsMobileStepper.defaultProps ={
  dateFormat: 'dddd, DD.MM',
  shortDateFormat: 'DD.MM'
};

export default DotsMobileStepper;