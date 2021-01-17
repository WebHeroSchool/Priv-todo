import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

const App = () => {

  const Items = [
    {
      value: 'Написать новое приложение',
      isDone: true
    },
    {
      value: 'Протестировать',
      isDone: false
    },
    {
      value: 'Запушить',
      isDone: false
    }
  ]
  
  return (
    <div className={styles.wrap}>
      <h1 className={styles.text}>Важные дела:</h1>
      <InputItem />
      <ItemList Items={Items} />
      <Footer count={2} />
    </div>);
}

export default App;
