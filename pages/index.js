import React, { Component } from "react";
import CryptoSelector from "../components/CryptoSelector";
import Address from "../components/Address";
import WalletPasscode from "../components/WalletPasscode";
import WalletKey from "../components/WalletKey";
import { getEthWallet } from "../libs/createWallet";

export default class extends Component {
  state = { crypto: null, passcode: null, address: null, key: null };

  handleSelection(crypto) {
    console.log(`selecting ${crypto}`);
    this.state.crypto ? (crypto = null) : null;
    this.setState(() => ({ crypto }));
  }

  handlePasscode(passcode) {
    console.log(`Passcode is ${passcode}`);
    this.setState(() => ({ passcode }));
  }

  render() {
    console.log("crypto state is", this.state.crypto);
    return (
      <div>
        <div>Select a currency and a wallet will be created</div>
        <CryptoSelector handleSelection={this.handleSelection.bind(this)} />
        {this.state.crypto ? (
          <WalletPasscode handlePasscode={this.handlePasscode.bind(this)} />
        ) : null}
        {this.state.passcode ? (
          <div>
            <WalletKey />
            <Address />
          </div>
        ) : null}
      </div>
    );
  }
}
