import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer';
import styles from'./App.module.css'

const App = () => {

  const Items = [
    {
      value: 'Написать новое приложение'
    },
    {
      value: 'Протестировать'
    },
    {
      value: 'Запушить'
    }
  ]
  
  return (
    <div className={styles.wrap}>
      <h1>Важные дела:</h1>
      <InputItem />
      <ItemList Items={Items} />
      <Footer count={3} />
    </div>);
}

export default App;
