import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import classNames from "classnames";

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import styles from './UiLoading.module.css'

const UiLoading = ({theme= 'white', isShadow = true, classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case "white": setLoaderIcon(loaderWhite); break;
            case "black": setLoaderIcon(loaderBlack); break;
            case "blue": setLoaderIcon(loaderBlue); break;
            default: break
        }
    }, [])

    return (
        <img
            className={classNames(styles.loader, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt="Loader"
        />
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string,
    isShadow: PropTypes.bool,
}

export default UiLoading