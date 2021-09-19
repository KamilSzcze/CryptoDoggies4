const DoggiesContract = artifacts.require("DoggiesContract");

module.exports = async function (deployer) {
  deployer.deploy(DoggiesContract);
  /*var instance = await DoggiesContract.deployed();
  let name = await instance.name();
  let symbol = await instance.symbol();
  let totalSupply = await instance.totalSupply();
  console.log(totalSupply);
  console.log(name);
  console.log(symbol);*/
};
