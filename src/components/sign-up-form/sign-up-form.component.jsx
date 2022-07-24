import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Paswoorden komen niet overeen.")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Kan gebruiker niet aanmaken, email is al in gebruik.')
            } else {
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Naam</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email}/>

                <label>Paswoord</label>
                <input type='password' required onChange={handleChange} name='password' value={password}/>

                <label>Bevestig paswoord</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <button type='submit'>Aanmelden</button>
            </form>
        </div>
    )
}

export default SignUpForm