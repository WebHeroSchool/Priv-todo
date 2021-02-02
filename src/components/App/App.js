import React, {useEffect, useState } from 'react';

import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from'./App.module.css';

const App = () => {
  const initialState = {
    Items: [
      {
        value: 'Написать новое приложение',
        isDone: false,
        id: 1
      },
      {
        value: 'Протестировать',
        isDone: false,
        id: 2
      },
      {
        value: 'Запушить',
        isDone: false,
        id: 3
      }
    ],
    count: 3
};

const [Items, setItems] = useState(initialState.Items);
const [count, setCount] = useState(initialState.count);

useEffect( () => {
  console.log('update')
});

useEffect( () => {
  console.log('mount')
}, []);

  const onClickDone = (id) => {
    const newItemList = Items.map(item => {
      const newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    setItems({newItemList});
  };

  const onClickDelete = (id) => {
    const newItemList = Items.filter(item => item.id !==id);

    setItems(newItemList);
    setCount((count) => count - 1);
  };


  const onClickAdd = (value) => {
    const newItemList = [
      ...Items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];

    setItems(newItemList);
    setCount((count) => count + 1);
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <div className={styles.wrapList}>
        <InputItem onClickAdd={onClickAdd} />
        <ItemList 
          Items={Items} 
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </div>
      <Footer count={count} />
    </div>);
};

export default App;
