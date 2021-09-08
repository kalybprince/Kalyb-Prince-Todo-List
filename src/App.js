import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import DisplayList from './components/DisplayList';

function App() {
  const [array, setArray] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const arrayPasser = (newItem) => {
    var newArray = [...array, newItem];
    setArray( newArray );
  }

  const deleteItem = (index) => {
    var filterArray = array.filter((item, idx) => index !== idx)
    setArray(filterArray);
  }

  const checkItem = (e, index) => {
    setArray([...array].map(((item, i) => i === index ? {...item, "checked": !item.checked} : item)))
  }

  return (
    <>
      <Form arrayPasser={ arrayPasser } />
      <DisplayList array={ array } deleteItem={ deleteItem } checkItem={ checkItem } />
    </>
  );
}

export default App;
