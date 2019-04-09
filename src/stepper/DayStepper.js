import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

class DotsMobileStepper extends React.Component {

  render() {
    const {classes, theme} = this.props;

    return (
      <Toolbar classes={{root: classes.root}}>
        {this.renderPreviousDate()}
        {this.renderCurrentDate()}
        {this.renderNextDate()}
      </Toolbar>
    )
  }

  renderCurrentDate() {
    const {currentDate, dateFormat} = this.props;
    return (
      <Typography align="center" variant="h4" color="textPrimary">
        {currentDate.locale('pl').format(dateFormat)}
      </Typography>
    )
  }

  renderPreviousDate() {
    const {theme, previousDate, isPreviousDateDisabled, shortDateFormat, selectDate} = this.props;
    return (
      <Button size="small" onClick={() => selectDate(previousDate)} disabled={isPreviousDateDisabled}>
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
        {previousDate.format(shortDateFormat)}
      </Button>
    )

  }

  renderNextDate() {
    const {theme, nextDate, isNextDateDisabled, shortDateFormat, selectDate} = this.props;
    return (
      <Button size="small" onClick={() => selectDate(nextDate)} disabled={isNextDateDisabled}>
        {nextDate.format(shortDateFormat)}
        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
      </Button>
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
  dateFormat: 'dddd',
  shortDateFormat: 'DD.MM'
};

export default withStyles(styles, {withTheme: true})(DotsMobileStepper);