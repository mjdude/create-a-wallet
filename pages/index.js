import React, { Component } from "react";
import CryptoSelector from "../components/CryptoSelector";
import Address from "../components/Address";
import {getEthWallet} from "../libs/createWallet";

export default class extends Component {
  state = { crypto: null , wallet: null };

  handleSelection(crypto) {
    console.log(`selecting ${crypto}`);
    this.state.crypto ? crypto = null : null;
    this.setState(() => ({crypto}));
  }

  render() {
    console.log("crypto state is" , this.state.crypto);
    return (
      <div>
        <div>Select a currency and a wallet will be created</div>
        <CryptoSelector handleSelection={this.handleSelection.bind(this)} />
        {this.state.crypto ? <Address /> : null}
      </div>
    );
  }
}
