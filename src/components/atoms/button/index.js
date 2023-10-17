import * as React from "react"

import styles from "./styles.module.css"

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

const Button = (props) => {
    const { 
        type, 
        onClick, 
        children, 
        theme, 
        size, 
        className, 
        disabled,
    } = props
    const classProps = [
        styles.button, 
        styles[theme],
        styles[size],
        className,
    ]

    if (disabled) {
        classProps.push(styles[disabled])
    }
    
    return (
        <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={classProps.join(' ')}
        >
            {children}
        </button>
    )
}

export default Button