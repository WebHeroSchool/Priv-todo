import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Item.module.css';

class Item extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;
    
    return (
    
    <div className={styles.item}> 

      <Checkbox
      checked={isDone}
      color="primary"
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      onClick={() => onClickDone(id)}
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

    </div >);
  }
}

Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default Item;
