import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false
  };

  formChangeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmitHandler = async event => {
    event.preventDefault();

    const campaignInstance = Campaign(this.props.campaignAddress);

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaignInstance.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });

      Router.replaceRoute(`/campaigns/${this.props.campaignAddress}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitHandler} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={this.formChangeHandler}
          />
        </Form.Field>
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
        <Message error header="Oops!" content={this.state.errorMessage} />
      </Form>
    );
  }
}

export default ContributeForm;
