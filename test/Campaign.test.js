const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  // .Contract is expecting a JS object, not JSON
  // need to deploy with the bytecode
  // send the transaction
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods
    .createCampaign("100")
    .send({ from: accounts[0], gas: "1000000" });

  const addressesArr = await factory.methods.getDeployedCampaigns().call();
  campaignAddress = addressesArr[0];

  // now that the campaign exists on the network, create a JS instance of the campaign to interact with it
  campaign = new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("sets creator as manager", async () => {
    let manager = await campaign.methods.manager().call();
    assert.equal(manager, accounts[0]);
  });

  it("allows people to contribute, setting them as approvers", async () => {
    await campaign.methods
      .contribute()
      .send({ value: 1000, from: accounts[1] });

    let isContributer = await campaign.methods.approvers(accounts[1]);
    assert.ok(isContributer);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods
        .contribute()
        .send({ value: 50, from: accounts[2] });
      assert(false);
    } catch (err) {
      assert(true);
    }
  });

  it("allows manager to make payment request", async () => {
    await campaign.methods
      .createRequest("payment request test description", "1000", accounts[1])
      .send({ from: accounts[0], gas: "1000000" });
    const request = await campaign.methods.requests(0).call();
    assert.equal(request.description, "payment request test description");
  });

  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("5", "ether")
    });

    await campaign.methods
      .createRequest(
        "some description",
        web3.utils.toWei("3", "ether"),
        accounts[1]
      )
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods
      .approveRequest(0)
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods
      .finalizeRequest(0)
      .send({ from: accounts[0], gas: "1000000" });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance); //balance is still a string

    // campaignFactory and campaign are re-set after each test, but ganache is in charge of the accounts, so the account balances do not reset after each test
    assert(balance > 102);
  });
});
