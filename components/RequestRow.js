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
      .send({ from: accounts[0], gas: "1000000" });
  };

  onFinalizeHandler = async () => {
    const campaignInstance = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await campaignInstance.methods
      .finalizeRequest(this.props.id)
      .send({ from: accounts[0], gas: "1000000" });
  };

  render() {
    const { Row, Cell } = Table;
    const readyToFinalize =
      this.props.request.approvalCount > this.props.approversCount / 2;

    return (
      <Row
        disabled={this.props.request.complete}
        positive={readyToFinalize && !this.props.request.complete}
      >
        <Cell>{this.props.id + 1}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(this.props.request.value, "ether")}</Cell>
        <Cell>{this.props.request.recipient}</Cell>
        <Cell>
          {this.props.request.approvalCount} / {this.props.approversCount}
        </Cell>
        <Cell>
          {this.props.request.complete ? null : (
            <Button color="green" basic onClick={this.onApproveHandler}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {this.props.request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalizeHandler}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
