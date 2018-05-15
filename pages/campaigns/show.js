import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";

import Layout from "../../components/Layout";
import campaignInstance from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  // need to get the assress of the campaign from the url
  static async getInitialProps(props) {
    const campaign = campaignInstance(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      managerAddress,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: managerAddress,
        meta: "Manager address",
        description: "Address of manager that created the campaign",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: "Required amount of wei to become a contributer/approver"
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "Requests to withdraw money from the contribution pool. Requests must be approved by contributers/approvers"
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of contributers to campaign",
        style: { overflowWrap: "break-word" }
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Contribution Pool Balance",
        description: "Amount of money in contribution pool of the campaign"
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>specific campaign</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
