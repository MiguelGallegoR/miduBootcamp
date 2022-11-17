
export const Add = ({submit, changeName, changePhone, newName, phone}) => {


    return (
        <div>
            <h3>Add a new contact</h3>
            <form onSubmit={submit}>
                <div>name: <input onChange={changeName} value={newName} /></div><br></br>
                <div>phone: <input onChange={changePhone} value={phone} /></div>
                <div>
                <button type="submit">add</button><br></br>
                </div>
            </form>
        </div>

    )
}