import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Ada Lovelace'}
  ])
  const [newName, setNewName] = useState('new name...')

  const addName = (e) => {
    e.preventDefault()
    const NameObject = {
      name: newName
    }
    setPersons(persons.concat(NameObject))
    setNewName('')
  }

  const handleNewName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <li key={person.name}>{person.name} </li>
        )}
      </ul>
    </div>
  )
}

export default App;
