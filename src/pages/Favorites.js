import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList'
function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if (!favoritesCtx.totalFavorites) {
        content = <p>No favorites yet</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return <div>
        <h1>My favorites</h1>
        {content}
    </div>
}
export default FavoritesPage;