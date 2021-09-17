//const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = "run execute drama goddess reflect pulp okay rival delay payment subway absorb"
const api = "533S8PQR15EXU7FEV566423ZXDN758AV3F";
module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: api
  },
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-2-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version:"0.7.3"

    }
  }
}