import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context'
function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const isFavorite = favoriteCtx.isFavorite(props.meetup.id);
    function toggleFavorite() {
        if (isFavorite) {
            favoriteCtx.removeFavorite(props.meetup.id)
        } else {
            favoriteCtx.addFavorite(props.meetup)
        }
    }
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.meetup.image} alt={props.meetup.title}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavorite}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;