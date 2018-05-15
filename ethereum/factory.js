import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// Deployed Factory contract - to tell web3 about an already existing contract, pass it the contract's ABI (interface), and the address of the contract
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x00Ec8f394630CB45ba7593b01859bd0Be3E752c0"
);

export default instance;
