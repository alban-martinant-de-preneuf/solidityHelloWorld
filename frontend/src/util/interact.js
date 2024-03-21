// require('dotenv').config()
const {
    REACT_APP_ALCHEMY_API_KEY,
    REACT_APP_CONTRACT_ADDRESS
} = process.env;

const alchemyKey = `wss://eth-sepolia.g.alchemy.com/v2/${REACT_APP_ALCHEMY_API_KEY}`;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = REACT_APP_CONTRACT_ADDRESS;

export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => {
    const message = await helloWorldContract.methods.message().call();
    return message;
};

export const connectWallet = async () => {

};

export const getCurrentWalletConnected = async () => {

};

export const updateMessage = async (address, message) => {

};
