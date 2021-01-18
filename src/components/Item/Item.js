import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete'
import classnames from 'classnames';
import styles from './Item.module.css'

const Item = ({ value, isDone }) => (<div className={styles.item}> 

  <Checkbox
    checked={isDone}
    color="primary"
    flex='1'
    inputProps={{ 'aria-label': 'decorative checkbox' }}
  />

  <label className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
  }>
    {value}
  </label>

  <div className={styles.btnDelete}>
    <Grid
      item xs={8}>
      <DeleteIcon
        color="action"
        flex='1'
      />
    </Grid>
  </div>

</div>);

export default Item;
