function RadioButton(props) {
  const { group, name, value, currentValue } = props;
  return (
    <label>
      <input type="radio" name={group} value={value} onClick={props.onClick} checked={currentValue === value} readOnly />
      {name}
    </label>

  )
}

function Page(props) {
  const { header, children, leftButton, rightButton } = props;
  return (
    <>
      <PageHeader header={header} leftButton={leftButton} rightButton={rightButton} />
      {children}
    </>
  )
}

function PageHeader(props) {
  const { header, leftButton, rightButton } = props;
  const gridStyle = {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr'
  }
  return (
    <div>
      <div>
        {pageHeader(header)}
      </div>
      <div style={gridStyle}>
        <NavigationButton button={leftButton} />
        <NavigationButton button={rightButton} />
      </div>
    </div>
  )
}

function Checkbox(props) {
  return (
    <div style={{ padding: '5px 5px' }}>
      <input type='checkbox' id={props.id} />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  )
}

function NavigationButton(props) {
  const { button: { disabled, label, onClick } } = props;
  const buttonLabel = label ? label : null;
  return (
    <button disabled={disabled} onClick={onClick}>{buttonLabel}</button>
  )
}

function boldText(text) { return <b>{text}</b> }
function bigBoldText(text) { return <b style={{ fontSize: '20px' }}>{text}</b> }
function pageHeader(text) { return <div style={{ textAlign: 'center' }}>{bigBoldText(text)}</div> }
function singlePluralWord(text, number) { return number > 1 ? text + 's' : text }

export {
  RadioButton,
  boldText,
  bigBoldText,
  pageHeader,
  singlePluralWord,
  Page,
  Checkbox
}