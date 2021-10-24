function RadioButtonWithKey(props) {
    const { group, name, value, index } = props;
    return (
        <div key={index}>
            <input type="radio" id={name} name={group} value={value} onClick={props.onClick} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

function RadioButton(props) {
    const { group, name, value } = props;
    return (
        <div>
            <input type="radio" id={name} name={group} value={value} onClick={props.onClick} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export {
    RadioButton,
    RadioButtonWithKey
}