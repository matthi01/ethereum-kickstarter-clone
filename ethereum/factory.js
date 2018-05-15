import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// Deployed Factory contract - to tell web3 about an already existing contract, pass it the contract's ABI (interface), and the address of the contract
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2b7A5D81d979d0eC2bEAeC9319b2f202B32fB27d"
);

export default instance;
