import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  onApproveHandler = async () => {
    const campaignInstance = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await campaignInstance.methods
      .approveRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  onFinalizeHandler = async () => {
    const campaignInstance = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await campaignInstance.methods
      .finalizeRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  render() {
    const { Row, Cell } = Table;

    return (
      <Row>
        <Cell>{this.props.id + 1}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(this.props.request.value, "ether")}</Cell>
        <Cell>{this.props.request.recipient}</Cell>
        <Cell>
          {this.props.request.approvalCount} / {this.props.approversCount}
        </Cell>
        <Cell>
          <Button color="green" basic onClick={this.onApproveHandler}>
            Approve
          </Button>
        </Cell>
        <Cell>
          <Button color="teal" basic onClick={this.onFinalizeHandler}>
            Finalize
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
