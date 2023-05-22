import PersonDetails from "./PersonDetails"

const Phonebook = ({ people, handle }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {people.map(person => {
                    return (
                        <PersonDetails 
                            key={person.name} 
                            name={person.name} 
                            number={person.number} 

                            handleClick={() => handle(person.id)}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Phonebook