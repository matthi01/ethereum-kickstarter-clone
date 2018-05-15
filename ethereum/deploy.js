const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
const fs = require("fs-extra");

// remember, only need to deploy the factory

const provider = new HDWalletProvider(
  "12 word mnemonic...",
  "https://rinkeby.infura.io/KsAC9kkwIlMDfaC6YzqT"
);

const web3 = new Web3(provider);

//bytecode needs to be prefixed with 0x... fun
const bytecode = "0x" + compiledFactory.bytecode;

//get accounts from web3 instance
//new contract - remember the interface (ABI) is in JSON
//deploy - bytecode (data) and arguments
//send - account
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("using account: " + accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Factory Address: ", result.options.address);

  fs.removeSync("../DeployedFactoryAddress.txt");
  fs.outputJsonSync("../DeployedFactoryAddress.txt", result.options.address);
};
deploy();
