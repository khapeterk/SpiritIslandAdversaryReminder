import { getAdversary } from "./Utils";

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
  const headerContainerStyle = {
    display: 'grid',
    gridTemplate: '1fr / 1fr 4fr 1fr'
  }
  return (
    <div>
      <div style={headerContainerStyle}>
        <button><a style={{ textAlign: 'center' }} href="https://querki.net/u/darker/spirit-island-faq/#!spirit-island-faq" target="_blank" rel="noreferrer">SI FAQ</a></button>
        <div style={{ textAlign: 'center' }}>{bigBoldText(header)}</div>
        <button disabled>Options</button>
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
    <button style={{ fontSize: '14px' }} disabled={disabled} onClick={onClick}>{buttonLabel}</button>
  )
}

function AdditionalLossCondition(props) {
  const { settings } = props;
  const adversary = getAdversary(settings.selectedAdversary);
  return (
    <>
      <div>{boldText('Additional Loss Condition: ')}</div>
      <div>{adversary['Additional Loss Condition']}</div>
    </>
  )
}

function AdversaryLevelGameplayChanges(props) {
  const { settings } = props;
  const adversary = getAdversary(settings.selectedAdversary);
  const gameplayChangeLevels = adversary.GameplayChangeLevels;
  const adversaryLevels = adversary.Level;
  return (
    <>
    <div>{boldText(adversary.ShortName + ' Gameplay Changes')}</div>
      {gameplayChangeLevels.length === 0 ? <div>None</div> : null}
      <ul style={{ margin: '0' }}>
        {gameplayChangeLevels.map((level) => {
          return level <= settings.selectedLevel ? adversaryLevels[level].GameplayChanges.map((changeText) => <li key={changeText}>Lvl {level}: {changeText}</li>) : null
        })}
      </ul>
    </>
  )
}

function AdversaryGameplayChanges(props) {
  const { settings } = props;
  return (
    <>
      <AdditionalLossCondition settings={settings} />
      <AdversaryLevelGameplayChanges settings={settings} />
    </>
  )
}

function boldText(text) { return <b>{text}</b> }
function bigBoldText(text) { return <b style={{ fontSize: '20px' }}>{text}</b> }
function pageHeader(text) { return <div style={{ textAlign: 'center' }}>{bigBoldText(text)}</div> }

export {
  RadioButton,
  boldText,
  bigBoldText,
  pageHeader,
  Page,
  Checkbox,
  AdversaryGameplayChanges,
  AdditionalLossCondition
}