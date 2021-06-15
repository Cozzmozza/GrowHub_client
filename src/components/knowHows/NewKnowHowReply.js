import React, {useState} from 'react';

const Reply = ({knowHow, getDate, currentUser,  postReply}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        body: "",
        date: date,
        author: currentUser,
        knowhow: knowHow,
    })

    const [formCheck, setFormCheck] = useState(null);

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postReply(formData);
        // setFormCheck(1);
    }

    // String body, String date, User author, TextContent textContent

    return(
        <>
        <p>This will be a reply form</p>

        <form onSubmit={handleSubmit}>
        <input type='text' name='body' id='body' onChange={handleChange} required /> 

        <button type='submit'>Submit Reply</button>
        </form>

    </>
    )
}
export default Reply;