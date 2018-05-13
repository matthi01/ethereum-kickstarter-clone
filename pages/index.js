import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {

  //NOTE: componentDidMount() does not get executed by Next server
  // async componentDidMount() {
  //   const campaigns = await factory.methods.getDeployedCampaigns().call();
  // }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns: campaigns };
  }

  render() {
    return <div>campaigns: {this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;
