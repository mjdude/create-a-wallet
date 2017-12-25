export default class extends React.Component {
  state = { passcode: `` };

  handleInput(event) {
    const passcode = event.target.value;
    this.setState(() => ({passcode}));
  }

  render() {
    return (
      <div>Enter passcode to generate key
        <input onChange={this.handleInput.bind(this)} type="text"/>
        <button onClick={() => this.props.handlePasscode(this.state.passcode)}>
          Set Passcode
        </button>
      </div>
    );
  }
}
