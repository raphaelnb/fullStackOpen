const PersonDetails = ({ name, number, handleClick}) => {
    return (
        <div>
            <li>{name} {number} <button onClick={handleClick} >delete</button> </li>
        </div>
    )
}
export default PersonDetails