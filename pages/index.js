import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from 'semantic-ui-react';

class CampaignIndex extends Component {

  //NOTE: componentDidMount() does not get executed by Next server
  // async componentDidMount() {
  //   const campaigns = await factory.methods.getDeployedCampaigns().call();
  // }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns: campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {

      return {
        header: address,
        description: <a href="#">View Campaign</a>,
        fluid: true
      };

    });

    return <Card.Group items={items} />
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignIndex;
