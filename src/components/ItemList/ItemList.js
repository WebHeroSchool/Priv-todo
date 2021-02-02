import React from 'react';
// import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ Items, onClickDone, onClickDelete }) => (<ul className={styles.wrap__tasks}>
  {Items.map(item => (<li key={item.id} className={styles.tasks}>
    <Item 
      value={item.value} 
      isDone={item.isDone}
      id={item.id} 
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}
    />
    </li>))}
</ul>);

// ItemList.propTypes = {
//   value: PropTypes.string.isRequired,
//   isDone: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
//   onClickDone: PropTypes.func.isRequired,
//   onClickDelete: PropTypes.func.isRequired
// }

export default ItemList;
