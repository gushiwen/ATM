const ATMDeposit = ({ onChange, isDeposit, deposit }) => {
    const choice = ["Deposit", "Cash Back"];
    return (
        <label className="label huge">
            <h3>{choice[Number(!isDeposit)]}</h3>
            <input type="number" onChange={onChange} value={deposit}></input>
            <input type="submit" value="Submit"></input>
        </label>
    );
};

const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    let status = `Account Balance $ ${totalState}`;

    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        setDeposit(Number(event.target.value));
    };

    const handleSubmit = () => {
        console.log(totalState, deposit);
        if (deposit <= 0) {
            alert("Invalid amount!");
        } else if (!isDeposit && totalState < deposit) {
            alert("Balance not enough!");
        } else {
            let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
            setTotalState(newTotal);
        }
        event.preventDefault();
    };
    
    return (
        <>
            <h2>{status}</h2>
            <hr/>
            <button onClick={() => setIsDeposit(true)}>Deposit</button>
            <button onClick={() => setIsDeposit(false)}>Cash Back</button>
            <hr />
            <form onSubmit={handleSubmit}>
                <ATMDeposit onChange={handleChange} isDeposit={isDeposit} deposit={deposit}>Deposit</ATMDeposit>
            </form>
        </>
    );
};

ReactDOM.render(<Account />, document.getElementById("root"));
