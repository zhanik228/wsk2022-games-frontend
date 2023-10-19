
const Input = (props) => {
    const { placeholder, className, value, onInput } = props
    return (
        <input 
            className={'form-control ' + 
            (className ? 
                [...className]?.join('')
            : ''
            )
        }
            placeholder={placeholder}
            value={value}
            onChange={onInput}
        />
    )
}

export default Input