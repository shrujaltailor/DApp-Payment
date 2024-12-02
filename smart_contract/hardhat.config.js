require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['4429074d8bf0e390af78f6fb79f2b24b1eea15057ea20de3ce2b6b601aaa0dc7'],
    },
  },
};