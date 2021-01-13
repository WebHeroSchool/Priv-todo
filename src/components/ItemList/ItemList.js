import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Протестировать'} /></li>
  <li><Item todoItem={'Запушить'}/></li>
</ul>);

export default ItemList;
