export default class extends React.Component{
    state = {passcode: null}
    handleInput(event) {
        this.setState(() => ({passcode: event.target.value}));
    }

    render(){
        return (
            <div>
                    <input onChange={this.handleInput} type="text">Enter a passcode</input>
                    <button onClick={() => props.handlePasscode()}></button>
            </div>);
    }
}    
