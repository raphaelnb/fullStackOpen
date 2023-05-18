import PersonDetails from "./PersonDetails"

const Phonebook = ({ people }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {people.map(person => {
                    return (
                        <PersonDetails key={person.name} name={person.name} number={person.number} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Phonebook