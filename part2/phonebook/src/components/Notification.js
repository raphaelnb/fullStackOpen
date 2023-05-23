const Notification = ({ message }) => {
    const style = {
        color: 'green',
        background: 'lightgray',
        fontSize: 16,
        border: 'solid',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div className='addNotification' style={style} >
            {message}
        </div>
    )
}

export default Notification