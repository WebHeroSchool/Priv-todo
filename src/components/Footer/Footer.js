import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Footer.module.css'

const Footer = ({ count }) => (
  <footer className={styles.wrapFooter}>
    <p>
      Осталось: {count}
    </p>

    <div>
      <Button color="primary">все</Button>
      <Button color="primary">активные</Button>
      <Button color="primary">выполнено</Button>
    </div>

    <div>
      <IconButton
        aria-label="delete"
        color='primary'>
        <DeleteIcon />
      </IconButton>
    </div>

  </footer>);

export default Footer;
