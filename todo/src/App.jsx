import './App.css'

import { useState } from 'react'
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
function App() {
  const [newItem, setNewItem] = useState("")
  const [allItems, setAllItems] = useState([])

  function addItem() {
    // setState(prevState => ...)
    setAllItems(oldItems => [...oldItems, newItem])
    setNewItem('')
  }
  function deleteItem(deleteIndex, deleteItem) {
    const updateItems = allItems.filter((item, index) => index !== deleteIndex)
    setAllItems(updateItems)
  }
  const listItems = allItems.map((item, index) =>
    < li key={index}> {item}<button onClick={() => deleteItem(index)}>delete</button></li >)

  /*const listItems = people.map(person =>
    < li > { person }</ >
  );
  return <ul>{listItems}</ul>;*/

  return (
    <>
      <div classname='App'>
        <h1>Todo List</h1>

        {/*input and button */}

        <input type="text"
          placeholder='add an item'
          value={(newItem)}
          onChange={e => setNewItem(e.target.value)} />

        <button onClick={() => addItem()}>Add</button>


        <ul>
          {listItems}
        </ul>
      </div >
    </>
  )
}

export default App
