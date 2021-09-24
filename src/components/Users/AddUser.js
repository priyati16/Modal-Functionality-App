import React ,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUsername] = useState("");
    const [enteresUserAge, setEnteredUserAge] =useState("");
    const [error, setError] =useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteresUserAge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non empty value).'
            });
            return;
        }
        if(+enteresUserAge <1 ){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (age must be greater than 0).'
            });
            return;
        }
        props.onAddUser(enteredUserName,enteresUserAge)
        // console.log(enteredUserName,enteresUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }



    const userNameChangeHandler =event=>{
        setEnteredUsername(event.target.value);
    }
    const userAgeChangeHandler = event =>{
        setEnteredUserAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="usrname">Add User</label>
                <input type="text" value={enteredUserName} onChange={userNameChangeHandler} id="username"/>
                <label htmlFor="age">Enter Age</label>
                <input type="number" name="" value={enteresUserAge} onChange={userAgeChangeHandler} id="age" />
                <Button type="submit">Add User</Button>
            </form>
            
        </Card>
        </div>
    )
}

export default AddUser
