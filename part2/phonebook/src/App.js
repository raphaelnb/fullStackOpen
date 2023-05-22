import { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import Phonebook from "./components/Phonebook";
import peopleService from './services/people'

const App = () => {

  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchMatch, setSearchMatch] = useState([])

  useEffect(() => {
    console.log('effect')

    peopleService
      .getAll()
      .then(people => {
        setPeople(people)
      }) 
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
      peopleService
        .create(NameObject)
        .then(person => {
          setPeople(people.concat(person))
          setNewName('')
          setNewNumber('')
        })
      }
  }
 
  const exclude = (id) => {
    console.log('clicked ',id)
    const personName = people.find(p => p.id === id)
    if (window.confirm(`Do you want to delete ${personName.name} ?`)) {
      peopleService
      .exclude(id)
      .then(
        del => {
          const newPeople = people.filter(de => de.id !== id)
          console.log(newPeople, del)
          setPeople(newPeople)
        }
        )
    }
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
      <div> {console.log(people)}
        <Phonebook people={people} 
          handle={exclude}
        /> 
      </div>
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