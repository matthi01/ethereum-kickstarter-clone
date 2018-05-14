import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";

import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minContribution: "",
    errorMessage: "",
    loading: false
  };

  onContributionChangeHandler = event => {
    this.setState({
      minContribution: event.target.value
    });
  };

  onSubmitHandler = async event => {
    event.preventDefault();
    this.setState({ errorMessage: "", loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      //cool - metamask will automatically take care of the gas calculation. No need to specify the gas when executing in the browser
      await factory.methods
        .createCampaign(this.state.minContribution)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Create a new Campaign</h1>

        <Form onSubmit={this.onSubmitHandler} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              labelPosition="right"
              label="wei"
              value={this.state.minContribution}
              onChange={this.onContributionChangeHandler}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
