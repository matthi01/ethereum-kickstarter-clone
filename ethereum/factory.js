import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// Deployed Factory contract - to tell web3 about an already existing contract, pass it the contract's ABI (interface), and the address of the contract
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xf9b6b6A4E31847030AaFeCAf93839810783cDEAF"
);

export default instance;
