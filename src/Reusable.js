function RadioButton(props) {
    const { group, name, value, currentValue } = props;
    return (
        <label>
            <input type="radio" name={group} value={value} onClick={props.onClick} checked={currentValue === value} readOnly/>
            {name}
        </label>

    )
}

function boldText(text) { return <b>{text}</b> }
function bigBoldText(text) { return <b style={{fontSize: '20px'}}>{text}</b> }
function pageHeader(text) { return <div style={{textAlign: 'center'}}>{bigBoldText(text)}</div>}

export {
    RadioButton,
    boldText,
    bigBoldText,
    pageHeader
}