import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete'
import classnames from 'classnames';
import styles from './Item.module.css'

const Item = ({ value, isDone, id, onClickDone, onClickDelete }) => (<div className={styles.item}> 

  <Checkbox
    checked={isDone}
    color="primary"
    inputProps={{ 'aria-label': 'decorative checkbox' }}
  />

  <label 
    onClick={() => onClickDone(id)} 
    className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
  }>
    {value}
  </label>

  <div 
    className={styles.btnDelete}
    onClick={() => onClickDelete(id)}
  >
    <Grid>
      <DeleteIcon
        color="action"
      />
    </Grid>
  </div>

</div>);

export default Item;
