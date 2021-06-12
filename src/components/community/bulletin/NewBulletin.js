import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const NewBulletin = ({currentUser, postBulletin, getDate}) => {

    const [formData, setFormData] = useState({
        date: "",
        author: null,
        title: "",
        body: ""
    })
    const [formCheck, setFormCheck] = useState(null);

    const date = getDate();

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData['date'] = date;
        formData['author'] = currentUser;
        setFormData(formData);
        postBulletin(formData);
        setFormCheck(1);
    }

    return(
    <>
         <h3>Enter your new Bulletin here!</h3>
            <form onSubmit={handleSubmit}>

                <label name='title'>Title:</label>
                <input type='text' name='title' id='title' onChange={handleChange} required />

                <label name='body'>Your Bulletin:</label>
                <input type='text' name='body' id='body' onChange={handleChange} required /> 

                <button type='submit'>Submit New Bulletin</button>
            </form>

            {formCheck ? <Redirect to="/community" />:null}
    </>
    )
}

export default NewBulletin;