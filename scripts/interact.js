const { ALCHEMY_API_KEY, SEPOLIA_PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// node provider - Alchemy
const alchemyProvider = new ethers.AlchemyProvider(network = "sepolia", ALCHEMY_API_KEY);

// signer
const signer = new ethers.Wallet(SEPOLIA_PRIVATE_KEY, alchemyProvider);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();

    console.log("The message is: " + message);

    console.log("updtating the message...");
    const newMessage = "This is the new message!";
    const tx = await helloWorldContract.update(newMessage);
    await tx.wait();

    console.log("The new message is: " + await helloWorldContract.message());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });