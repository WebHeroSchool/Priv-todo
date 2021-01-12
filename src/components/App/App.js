import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import Footer from '../Footer/Footer';

const App = () => (
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemList />
    <Footer />
  </div>);

export default App;