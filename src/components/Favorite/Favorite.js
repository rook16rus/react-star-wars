import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'

const Favorite = () => {
    const [count, setCount] = useState(null);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    }, [storeData])

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img
                    className={styles.icon}
                    src={icon}
                    alt="Favorites"
                />
            </Link>
        </div>
    )
}

export default Favorite