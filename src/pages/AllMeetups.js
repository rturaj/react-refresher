import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])
    useEffect(() => {
        fetch('https://react-course-504e6-default-rtdb.firebaseio.com/meetups.json').then(res => {
            return res.json()
        }).then(data => {
            setIsLoading(false)
            setLoadedMeetups(Object.values(data).map((el, i) => ({ ...el, id: i + 1 })));
        })
    }, [])

    if (isLoading) {
        return <div> Loading...</div>
    } else {
        return <div><h1>AllMeetups</h1> <MeetupList meetups={loadedMeetups} /></div>
    }
}
export default AllMeetupsPage;