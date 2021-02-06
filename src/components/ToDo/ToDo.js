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
  const [count, setCount] = useState(initialState.count);
  const [filtered, setFiltered] = useState(initialState.filtered);
  const [filteredItems, setFilteredItems] = useState(initialState.filteredItems);
  const [filteredCount, setFilteredCount] = useState(initialState.filteredCount);

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
  };

  const onClickDelete = id => {
    const newItemList = [...Items];
    let newCount = count;

    let index = newItemList.map(item => item.id).indexOf(id);
    if (index !== -1) {
      newItemList.splice(index, 1)
      setItems(newItemList);
      setCount(newCount - 1);
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
    setCount(count + 1);
  };

  const onClickShowAll = () => {
    let newItemList = [...Items];
    let newCount = count;

    setItems(newItemList);
    setCount(newCount);
  };

  const onClickShowActive = () => {
    let newItemList = [...Items];
    let newCount = count;

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone === true).map(item => item.id);

    for (id of arrayOfId) {
      let index = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        newCount --;
      }
    }

    setFilteredItems(newItemList);
    setFilteredCount(newCount);
  };

  const onClickShowComleted = () => {
    let newItemList = [...Items];
    let newCount = count;
    let newFiltered = filtered;
    newFiltered = true;

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone !== true).map(item => item.id);
    
    for (id of arrayOfId) {
      let index  = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        newCount --;
      }
    }

    setFiltered(newFiltered);
    setFilteredItems(newItemList);
    setFilteredCount(newCount);
  };

  const onClickClearCompleted = () => {
    let newItemList = [...Items];
    let newCount = count;

    let id;
    const arrayOfId = newItemList.filter(item => item.isDone === true).map(item => item.id);

    for (id of arrayOfId) {
      let index = newItemList.map(item => item.id).indexOf(id);
      if (index !== -1) {
        newItemList.splice(index, 1);
        newCount --;
      }
    }
    setItems(newItemList);
    setCount(newCount);
  }

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
      <Footer count={filteredCount} 
        onClickShowAll={onClickShowAll}
        onClickShowActive={onClickShowActive}
        onClickShowComleted={onClickShowComleted}
        onClickClearCompleted={onClickClearCompleted}/>
    </div>);
};

export default ToDo;
