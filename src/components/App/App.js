import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

class App extends React.Component {

  state = {
    Items: [
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
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <div className={styles.wrapList}>
          <InputItem />
          <ItemList Items={this.state.Items} onClickDone={this.onClickDone} />
        </div>
        <Footer count={2} />
      </div>);
 }
};

export default App;
