import "../styles/newUser/newUser.css";
import UserForm from "../components/forms/UserForm"

function NewUser() {
    return (
        <div className="newUser container">
            <div className="newUser__content">
                <h2>Add a new LinkedIn to your address book</h2>
                <UserForm />
            </div>
            
        </div>
    )
}

export default NewUser