import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

class App extends React.Component {

  render() {
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
        <h1 className={styles.title}>Важные дела:</h1>
        <div className={styles.wrapList}>
          <InputItem />
          <ItemList Items={Items} />
        </div>
        <Footer count={2} />
      </div>);
 }
};

export default App;
