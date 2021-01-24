import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ Items, onClickDone }) => (<ul className={styles.wrap__tasks}>
  {Items.map(item => (<li key={item.value} className={styles.tasks}>
    <Item 
      value={item.value} 
      isDone={item.isDone}
      id={item.id} 
      onClickDone={onClickDone} 
    />
    </li>))}
</ul>);

export default ItemList;
