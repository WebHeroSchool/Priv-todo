import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer';

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
    <div>
      <h1>Важные дела:</h1>
      <InputItem />
      <ItemList Items={Items} />
      <Footer count={3} />
    </div>);
}

export default App;
