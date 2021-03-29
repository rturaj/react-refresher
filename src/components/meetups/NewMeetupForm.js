import { useRef } from 'react';
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        }
        props.onAddMeetup(meetupData)
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="url" required id="image" ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea rows="5" required id="description" ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button >Add Meetup</button>
            </div>
        </form>
    </Card>
}
export default NewMeetupForm;