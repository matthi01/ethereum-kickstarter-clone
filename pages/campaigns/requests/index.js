import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import Layout from "../../../components/Layout";
import { Link } from "../../../routes";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const campaignAddress = props.query.address;

    return { campaignAddress: campaignAddress };
  }

  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.campaignAddress}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
