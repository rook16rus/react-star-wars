import PropTypes from "prop-types";
import classNames from "classnames";

import '../index.css'
import styles from './UiButtons.module.css'

const UiButton = ({text, onClick, disabled, theme='dark', classes}) => {
    return (
        <button
            className={classNames(styles.button, styles[theme], classes)}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default UiButton