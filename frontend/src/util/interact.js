// require('dotenv').config()
const { ALCHEMY_API_KEY, CONTRACT_ADDRESS } = process.env;

const alchemyKey = `wss://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../../../artifacts/contracts/HelloWorld.sol/HelloWorld.json").abi;
const contractAddress = CONTRACT_ADDRESS;

export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => {

};

export const connectWallet = async () => {

};

export const getCurrentWalletConnected = async () => {

};

export const updateMessage = async (address, message) => {

};
