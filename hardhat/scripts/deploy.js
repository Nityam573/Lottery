const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");

async function main() {
  // deploy the contract
  const randomWinnerGame = await hre.ethers.deployContract("Lottery", [
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE,
  ]);

  await randomWinnerGame.waitForDeployment();

  // print the address of the deployed contract
  console.log("Verify Contract Address:", randomWinnerGame.target);
  // Address : 0x2a6f35B2DB9ac1Ca2bF73Ac714267aA19D3c83FA

  console.log("Sleeping.....");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
