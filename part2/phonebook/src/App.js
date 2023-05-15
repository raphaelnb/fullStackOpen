import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Ada Lovelace', number: '9098023-23'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (e) => {
    e.preventDefault()

    if (persons.find(n => n.name === newName)) {
      alert(`${newName} is already on the phonebook`)
    } else {
      const NameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(NameObject))
    }
    setNewName('')
    setNewNumber('') 
  }

  const handleNewName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
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
          number: <input 
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <li key={person.name}>{person.name} {person.number} </li>
        )}
      </ul>
    </div>
  )
}

export default App;
