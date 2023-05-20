import { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import Phonebook from "./components/Phonebook";
import axios from "axios";

const App = () => {

  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchMatch, setSearchMatch] = useState([])

  useEffect(() => {
    console.log('effect')

    const eventHandler = response => {
      console.log('promise fulfilled')
      setPeople(response.data)
    }

    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  },[])

  const addName = (e) => {
    e.preventDefault()

    if (people.find(n => n.name === newName)) {
      alert(`${newName} is already on the phonebook`)
    } else {
      const NameObject = {
        name: newName,
        number: newNumber
      }
      axios
        .post('http://localhost:3001/persons', NameObject)
        .then(response => {
          console.log(response)
          setPeople(people.concat(response.data))
        })

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

  const handleSearch = (e) => {
    const filtered = people.filter(person => person.name === e.target.value
      )
      console.log(e.target.value)
      setSearchMatch(filtered)
      console.log(filtered)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search <input 
          onChange={handleSearch}
        />
      </div>
      <div>
        <ul>
          {searchMatch.map(p => {
            return (
              <li key={p.name}>{p.name} {p.number} </li>
            )
          })}
        </ul>
      </div>
      <AddPerson 
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <Phonebook people={people} />
    </div>
  )
}

export default App;


/** funciona *
 * const handleSearch = (e) => {
    const filtered = persons.filter(person => person.name === e.target.value
    )
    console.log(e.target.value)
    setSearchMatch(filtered)
    console.log(filtered)
  }
 */

/**
 *         persons.map(person => Object.keys(person).reduce((acc, key) =>{
          acc[key.toLowerCase()] = person[key]
          return acc
        },{}) === e.target.value ?
        setSearchMatch(acc) :
        setSearchMatch([])
        )
        
    
    console.log(e.target.value)
    console.log(filtered)
 */