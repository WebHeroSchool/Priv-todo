import React, { useEffect, useState } from 'react';

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

import styles from './ToDo.module.css';

const ToDo = () => {
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
    count: 3,
    filtered: false,
    filteredItems: [],
    filteredCount: 0
  };

  const [Items, setItems] = useState(initialState.Items);
  const [filteredItems, setFilteredItems] = useState(initialState.Items);
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('update')
  });

  useEffect(() => {
    console.log('mount')
  }, []);

  const onClickDone = (id) => {
    const newItemList = Items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    setItems(newItemList);
    setFilteredItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = [...Items];

    let index = newItemList.map(item => item.id).indexOf(id);
    if (index !== -1) {
      newItemList.splice(index, 1)
      setItems(newItemList);
      setFilteredItems(newItemList);
      setCount(count - 1);
    }
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
    setFilteredItems(newItemList);
    setCount(count + 1);
  };

  const onClickShowAll = () => {
    let newItemList = [...Items];

    setFilteredItems(newItemList);
  };

  const onClickShowActive = () => {
    let newItemList = [...Items];

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone === true).map(item => item.id);

    for (id of arrayOfId) {
      let index = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        setCount(count - 1);
      }
    }

    setFilteredItems(newItemList);
  };

  const onClickShowComleted = () => {
    let newItemList = [...Items];

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone !== true).map(item => item.id);
    
    for (id of arrayOfId) {
      let index  = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        setCount(count - 1);
      }
    }

    setFilteredItems(newItemList);
  };

  const onClickClearCompleted = () => {
    let newItemList = [...Items];

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone === true).map(item => item.id);

    for (id of arrayOfId) {
      let index = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        setCount(count - 1);
      }
    }
    setFilteredItems(newItemList);
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <div className={styles.wrapList}>
        <InputItem onClickAdd={onClickAdd} />
        <ItemList
          Items={filteredItems}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </div>
      <Footer count={filteredItems.length} 
        onClickShowAll={onClickShowAll}
        onClickShowActive={onClickShowActive}
        onClickShowComleted={onClickShowComleted}
        onClickClearCompleted={onClickClearCompleted}/>
    </div>);
};

export default ToDo;
