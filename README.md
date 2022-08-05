# ATM Machine
In this exercise, the program simulate an ATM machine. <br />
Demo site is live at https://gushiwen.github.io/ATM/

### React Components
Account component maintain account and transaction states. <br />
Child component ATMDeposit handle deposit or withdraw operations. 


### states maintained by relevant events
select onChange event help to maintain states: atmMode, isDeposit, showInput; <br />
input onChange event help to maintain states: inputValue, validTransaction; <br />
input onBlue event help to maintain state: deposit; <br />
form onSubmit event help to maintain state: totalState, and reset other states. <br />
