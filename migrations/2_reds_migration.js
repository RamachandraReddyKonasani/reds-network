const Reds = artifacts.require("REDSToken");

module.exports = function (deployer) {
  deployer.deploy(Reds);
};
