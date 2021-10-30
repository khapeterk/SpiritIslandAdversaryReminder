function RadioButton(props) {
    const { group, name, value, currentValue } = props;
    return (
        <label>
            <input type="radio" name={group} value={value} onClick={props.onClick} checked={currentValue === value} readOnly/>
            {name}
        </label>

    )
}

export {
    RadioButton
}