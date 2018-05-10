const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// first remove the build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// read in the contract
const campaignPath = path.resolve(__dirname, "contracts/Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// compile the contractS (campaign factory and campaign)
const output = solc.compile(source, 1).contracts;

// recreate the build directory
fs.ensureDirSync(buildPath);

// write a file for each contract in the compiled source code into the build folder
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
