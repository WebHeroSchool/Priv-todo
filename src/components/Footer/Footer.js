import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Footer.module.css';

const Footer = ({ count, onClickShowAll, onClickShowActive, onClickShowComleted, onClickClearCompleted }) => (
  <footer className={styles.wrapFooter}>

    <div className={styles.wrapFilter}>
      <Button color="primary" onClick={onClickShowAll}>все </Button>
      <Button color="primary" onClick={onClickShowActive}>активные </Button>
      <Button color="primary" onClick={onClickShowComleted}>выполнено </Button>
    </div>

    <div>
      <IconButton
        aria-label="delete"
        color='primary'
        onClick={onClickClearCompleted}>
        <DeleteIcon />
      </IconButton>
    </div>

  </footer>);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onClickShowAll: PropTypes.func.isRequired,
  onClickShowActive: PropTypes.func.isRequired,
  onClickShowComleted: PropTypes.func.isRequired,
  onClickClearCompleted: PropTypes.func.isRequired
}

export default Footer;
