const AddPerson = ({
    addName,
    newName,
    handleNewName,
    newNumber,
    handleNewNumber
}) => {
    return (
        <div>
            <h2>Add new</h2>
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
        </div>
    )
}

export default AddPerson