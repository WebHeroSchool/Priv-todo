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

  onClickDone = id => {
    const newItemList = this.state.Items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ Items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.Items.filter(item => {
      const newItem = { ...item };
      if (item.id !== id) {
        return newItem;
      }
    });
    this.setState({ Items: newItemList});
  };

  render() {
    
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <div className={styles.wrapList}>
          <InputItem />
          <ItemList 
            Items={this.state.Items} 
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
        </div>
        <Footer 
          count={this.state.count} 
        />
      </div>);
 }
};

export default App;
