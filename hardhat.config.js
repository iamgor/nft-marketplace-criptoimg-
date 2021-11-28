require("@nomiclabs/hardhat-waffle");
const projectId = '552bc41a1a7b488db119f98447b68c55';
const fs = require('fs');
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork:'hardhat',
  networks:{
    hardhat:{
      chainId:  1337 // config standart
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  }
  solidity: {
    version: "0.8.4",
    settings: {
      opimazer: {
        enabled:true,
        runs:200
      }
    }
  }
};
