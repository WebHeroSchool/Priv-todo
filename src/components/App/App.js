import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from '../About/About';
import ToDo from '../ToDo/ToDo';
import Contacts from '../Contacts/Contacts';

import styles from'./App.module.css';
import { MenuList } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";

const App = () => (
  <Router>

    <div className={styles.wrap}>

      <Card className={styles.sidebar}>
        <MenuList>
          <Link className={styles.link} to='/'><MenuItem>обо мне</MenuItem></Link>
          <Link className={styles.link} to='/todo'><MenuItem>дела</MenuItem></Link>
          <Link className={styles.link} to='/contacts'><MenuItem>контакты</MenuItem></Link>
        </MenuList>
      </Card>

      <Card>
        <Route path='/' component={About}/>
        <Route path='/todo' component={ToDo}/>
        <Route path='/contacts' component={Contacts}/>
      </Card>

    </div>

  </Router>);


export default App;
