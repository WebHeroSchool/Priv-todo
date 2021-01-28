import React from 'react';
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

ItemList.defaultProps = {
  Items: [
    {
      value: '',
      isDone: false,
      id: 0
    }
  ]
};

export default ItemList;
