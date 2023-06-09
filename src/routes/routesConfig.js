import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]

export default routesConfig