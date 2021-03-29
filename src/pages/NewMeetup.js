import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        console.log(meetupData)
        fetch('https://react-course-504e6-default-rtdb.firebaseio.com/meetups.json', { method: 'POST', body: JSON.stringify(meetupData) }).then(res => {
            if (res.status === 200)
                history.replace("/")
        })
    }
    return <section>
        <h1>Add new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}
export default NewMeetupPage;