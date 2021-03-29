import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => { },
    removeFavorite: (id) => { },
    isFavorite: (id) => { },
});

export default FavoritesContext;

export function FavoritesContextProvider(props) {
    const [favorites, setFavorites] = useState([]);

    function addFavoriteHandler(meetup) {
        setFavorites((prev) => prev.concat(meetup))
    }

    function removeFavoriteHandler(id) {
        setFavorites((prev) => prev.filter(el => el.id !== id))
    }

    function isFavoriteHandler(id) {
        return favorites.some(el => el.id === id)
    }

    const context = {
        favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}