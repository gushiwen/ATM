const ATMDeposit = ({ onChange, onBlur, inputValue, isDeposit, validTransaction }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange} onBlur={onBlur} value={inputValue}></input>
      <input type="submit" disabled={!validTransaction} width="200" value="Submit" id="submit-input"></input>
    </label>
  );
};

const Account = () => {
  const [inputValue, setInputValue] = React.useState(''); // update the value of input field
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;

  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    setInputValue(event.target.value);

    if (event.target.value === "" || Number(event.target.value) <= 0 || (atmMode === "Cash Back" && Number(event.target.value) > totalState)) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
  };

  const handleBlur = (event) => {
    console.log(`handleBlur ${event.target.value}`);
    if (validTransaction) {
      setDeposit(Number(event.target.value));
    }
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    setInputValue('');
    setDeposit(0);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);
    if (event.target.value === "Deposit") {
      setIsDeposit(true);
      setShowInput(true);
    } else if (event.target.value === "Cash Back") {
      setIsDeposit(false);
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <hr />
      <label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      <hr />
      {showInput && <ATMDeposit onChange={handleChange} onBlur={handleBlur} inputValue={inputValue} isDeposit={isDeposit} validTransaction={validTransaction}></ATMDeposit>}
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));
